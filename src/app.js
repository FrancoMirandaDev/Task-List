import express from "express";
import { PORT } from "./config.js";
import morgan from "morgan";

import handlebars from "express-handlebars";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import Routerindex from "./routes/index.routes.js";
import Routerlogin from "./routes/auth.routes.js";

//Iniciamos Express
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "views"));

//Configuramos handlebars
const hbs = handlebars.create({
  layoutsDir: join(app.get("views"), "layouts"),
  extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//Iniciamos Morgan
app.use(morgan("dev"));

//Establece el port de la variable de entorno
app.set("port", PORT);

app.use(Routerindex);
app.use(Routerlogin);

export default app;
