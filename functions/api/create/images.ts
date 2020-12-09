import { NowRequest, NowResponse } from "@vercel/node";
import uploader from "../../utils/uploader";
import useCors from "../../utils/useCors";
import { success, fail } from "./../../utils/responses";

async function createImages(req: NowRequest, res: NowResponse) {
  await useCors(req, res);
  const { images, alias } = req.body;

  try {
    const { resultsThumbs, resultsPosters, resultsRaws } = await uploader(
      images,
      alias
    );

    const response = {
      ...success,
      data: {
        thumbs: resultsThumbs,
        posters: resultsPosters,
        raws: resultsRaws,
      },
    };

    res.status(200).json(response);
  } catch (err) {
    console.log("err", err);
    res.status(400).json({ ...fail });
  }
}

export default createImages;
