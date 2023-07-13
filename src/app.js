import express from "express";
import { PORT } from "./config.js";
import morgan from "morgan";

import flash from "connect-flash";
import session from "express-session";

import handlebars from "express-handlebars";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import Routerindex from "./routes/index.routes.js";
import Routerlogin from "./routes/auth.routes.js";

//Iniciamos Express
const app = express();

//Configuramos path para que sea mas comodo
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", join(__dirname, "views"));

//Configuramos handlebars
const hbs = handlebars.create({
  layoutsDir: join(app.get("views"), "layouts"),
  partialsDir: join(app.get("views"), "partials"),
  extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//Iniciamos Morgan
app.use(morgan("dev"));

//Establece el port de la variable de entorno
app.set("port", PORT);

//Mensajes flash y Express-session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

//Variables Globales
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  next();
});

//Routes
app.use(Routerindex);
app.use(Routerlogin);

export default app;
