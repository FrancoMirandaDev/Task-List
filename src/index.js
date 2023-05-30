//Ejecuta la app en el puerto "x" y establece el entorno en el cual se esta ejecutando

import app from "./app.js";
import "./database.js";

async function main() {
  app.listen(app.get("port"));

  console.log("Server on port", app.get("port"));
  console.log("Environment:", process.env.NODE_ENV);
}

main();