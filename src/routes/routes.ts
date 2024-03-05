import express from "express";

const routes = express();

routes.get("/", (req, res) => {
  res.send("esto es una prueba!");
});

export { routes };
