import express from "express";
import { MONGODB_URI, PORT } from "./config.js";
import morgan from "morgan";

//Iniciamos Express
const app = express();

//Iniciamos Morgan
app.use(morgan("dev"));

//Establece el port de la variable de entorno
app.set("port", PORT);


app.use("/",(req,res) => {
    res.send(`<h1>hola este es mi app de 
    <span style="color: red">todo list</span>
     con base de datos</h1>
     `).end
})

export default app;