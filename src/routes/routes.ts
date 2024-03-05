import express from "express";
import { getGif } from "../api/giphy.api";

const routes = express();

routes.get("/", async (req, res) => {
  const response = await getGif();
  console.log(response);
  res.json(response);
});

export { routes };
