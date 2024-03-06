import express, { Request, Response } from "express";
import { AxiosError, HttpStatusCode } from "axios";
import multer from "multer";
import { getGifSearch, getGifTrending } from "../api/giphy/giphy.api";
import { uploadGif } from "../api/db/db.api";

const routes = express();

// const storage = multer.diskStorage({
//   destination: "./uploads",
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

const storage = multer.memoryStorage();

const upload = multer({ storage });

routes.get("/trending", async (req: Request, res: Response) => {
  try {
    const { limit, offset } = req.query;
    const response = await getGifTrending({
      limit: limit as string,
      offset: offset as string,
    });
    res.json(response);
  } catch (error) {
    if (error instanceof AxiosError) {
      res.status(error.status).send({ error: error.message });
    }
  }
});

routes.get("/search", async (req: Request, res: Response) => {
  try {
    const { q, limit, offset } = req.query;
    const response = await getGifSearch({
      q: q as string,
      limit: limit as string,
      offset: offset as string,
    });
    res.json(response);
  } catch (error) {
    if (error instanceof AxiosError) {
      res.status(error.status).send({ error: error.message });
    }
  }
});

routes.post(
  "/uploadGif",
  upload.single("gif"),
  async (req: Request, res: Response) => {
    try {
      const {
        file: { originalname, buffer, fieldname },
      } = req;
      const response = await uploadGif({
        name: originalname,
        data: buffer,
        type: fieldname,
      });
      res.json(response);
    } catch (error) {
      if (error instanceof AxiosError) {
        res.status(error.status).send({ error: error.message });
      }
    }
  }
);

export { routes };
