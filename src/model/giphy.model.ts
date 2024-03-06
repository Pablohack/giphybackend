import mongoose from "mongoose";
import { IUploadGifProps } from "./model.type";

const modelSchema = mongoose.Schema;

const GiphySchema = new modelSchema<IUploadGifProps>({
  name: { type: String },
  data: { type: Buffer },
  type: { type: String },
  datetimeUpload: { type: Date, default: Date.now },
});

const Giphy = mongoose.model("Gihpy", GiphySchema);

export { Giphy };
