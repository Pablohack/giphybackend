import { Conexion } from "../../config/mongo.db";
import { Giphy } from "../../model/giphy.model";
import { IUploadGifProps } from "../../model/model.type";

const conn = new Conexion();

export const uploadGif = async ({ name, data, type }: IUploadGifProps) => {
  try {
    conn.connect();

    const newGif = new Giphy({ name, data, type });

    return await newGif.save();
  } catch (error) {
    throw new Error(error);
  } finally {
    conn.desconnect();
  }
};
