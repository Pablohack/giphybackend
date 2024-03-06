import express from "express";
import { routes } from "./src/routes/routes";
// configuracion de la app
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configurar header

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// configuracion de rutas
app.use(routes);

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
