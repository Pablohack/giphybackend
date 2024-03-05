import mongoose from "mongoose";

const modelSchema = mongoose.Schema;

interface IGiphy {
  title: string;
  url: string;
}

const GiphyModel = new modelSchema<IGiphy>({
  title: { required: true },
  url: { required: true },
});
export { GiphyModel };
