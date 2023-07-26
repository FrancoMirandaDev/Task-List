//Esquema de Task

import mongoose from "mongoose";

const tasks = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("tasks", tasks);
