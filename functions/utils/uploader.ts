import sharp from "sharp";
import AWS from "aws-sdk";
import shortid from "shortid";

const s3 = new AWS.S3();
AWS.config.update({
  accessKeyId: "",
  secretAccessKey: "",
});

export default async function uploader(files: string[], alias: string) {
  const thumbs = [];
  const posters = [];
  const raws = [];

  for (let file of files) {
    const id = shortid.generate();
    const buffer = Buffer.from(
      file.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );

    const thumbnail = await sharp(buffer)
      .resize(400, 400, {
        fit: "cover",
        position: "center",
      })
      .webp({ quality: 80 })
      .toBuffer();

    const poster = await sharp(buffer)
      .resize(1280, 720, {
        fit: "cover",
        position: "center",
      })
      .webp({ quality: 80 })
      .toBuffer();

    const raw = await sharp(buffer).webp({ quality: 100 }).toBuffer();

    thumbs.push({
      name: `${alias}/thumbs/${id}.webp`,
      content: thumbnail,
    });

    posters.push({
      name: `${alias}/posters/${id}.webp`,
      content: poster,
    });

    raws.push({
      name: `${alias}/raws/${id}.webp`,
      content: raw,
    });
  }

  const clientUpload = async (item: { name: string; content: any }) => {
    const response = await s3
      .upload({
        Key: item.name,
        ACL: "public-read",
        Body: item.content,
        ContentType: "image/webp",
        Bucket: "typefeel",
      })
      .promise();
    return response.Location;
  };

  for (const item of thumbs) {
    await clientUpload(item);
  }

  for (const item of posters) {
    await clientUpload(item);
  }

  for (const item of raws) {
    await clientUpload(item);
  }

  const resultsThumbs = thumbs.map(({ name }: any) => {
    return `https://typefeel.s3.amazonaws.com/${name}`;
  });

  const resultsPosters = posters.map(({ name }: any) => {
    return `https://typefeel.s3.amazonaws.com/${name}`;
  });

  const resultsRaws = raws.map(({ name }: any) => {
    return `https://typefeel.s3.amazonaws.com/${name}`;
  });

  return { resultsThumbs, resultsPosters, resultsRaws };
}
