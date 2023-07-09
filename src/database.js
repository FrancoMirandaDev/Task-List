//Conectamos la base de datos de MongoDB

import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

try {
  const db = await mongoose.connect(MONGODB_URI);
  console.log("Connected to DB:", db.connection.name);
} catch (error) {
  console.error(error);
}

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected");
});
