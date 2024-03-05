import { Conexion } from "../../config/mongo.db";
import { Giphy } from "../../model/giphy.model";

const conn = new Conexion();

export const saveGif = async ({ title, url }) => {
  try {
    conn.connect();

    const newGif = new Giphy({ title, url });

    return await newGif.save();
  } catch (error) {
    throw new Error(error);
  } finally {
    conn.desconnect();
  }
};
