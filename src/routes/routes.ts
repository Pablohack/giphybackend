import express, { Request, Response } from "express";
import { getGif } from "../api/giphy/giphy.api";

const routes = express();

routes.get("/", async (req: Request, res: Response) => {
  const { q, limit } = req.query;
  const response = await getGif({ q: q as string, limit: limit as string });
  res.json(response);
});

export { routes };
