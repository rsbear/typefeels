import { NowRequest, NowResponse } from "@vercel/node";
import AWS from "aws-sdk";
import shortid from "shortid";
import useCors from "../../utils/useCors";
import { success, fail } from "./../../utils/responses";

const s3 = new AWS.S3();
AWS.config.update({
  accessKeyId: "",
  secretAccessKey: "",
});

async function createArticles(req: NowRequest, res: NowResponse) {
  await useCors(req, res);
  const { title, content } = req.body;
  const alias = title.replace(/[^a-z0-9]/gi, "-").toLowerCase();
  const id = shortid.generate();

  try {
    // push to s3/articles dir

    await s3
      .putObject({
        Bucket: "typefeel",
        Key: `articles/${alias}-${id}.md`,
        ContentType: "text/md",
        Body: Buffer.from(content),
      })
      .promise();

    res.status(200).json({});
  } catch (err) {
    console.log("err", err);
    res.status(400).json({ ...fail });
  }
}

export default createArticles;
