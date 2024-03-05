import express, { Request, Response } from "express";
import { getGif } from "../api/giphy/giphy.api";
import { saveGif } from "../api/db/db.api";

const routes = express();

routes.get("/", async (req: Request, res: Response) => {
  const { q, limit } = req.query;
  const response = await getGif({ q: q as string, limit: limit as string });
  res.json(response);
});

routes.post("/insert", async (req: Request, res: Response) => {
  const { title, url } = req.body;
  const response = await saveGif({ title, url });
  res.json(response);
});

export { routes };
