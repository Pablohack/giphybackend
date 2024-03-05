import mongoose from "mongoose";
import { IGiphy } from "./model.type";

const modelSchema = mongoose.Schema;

const GiphySchema = new modelSchema<IGiphy>({
  title: { type: String },
  url: { type: String },
});

const Giphy = mongoose.model("Gihpy", GiphySchema);

export { Giphy };
