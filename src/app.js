import express from "express";
import { PORT } from "./config.js";
import morgan from "morgan";

import Routerindex from "./routes/index.routes.js";
import Routerlogin from "./routes/auth.routes.js";

//Iniciamos Express
const app = express();

//Iniciamos Morgan
app.use(morgan("dev"));

//Establece el port de la variable de entorno
app.set("port", PORT);

app.use(Routerindex);
app.use(Routerlogin);

export default app;
