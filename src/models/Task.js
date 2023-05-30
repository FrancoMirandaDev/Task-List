//Esquema de Task

import mongoose from "mongoose";

const ListTodo = new mongoose.Schema(
    {
        title: {
          type: String,
          required: true,
        },
        description: {
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

export default mongoose.model("ListTodo", ListTodo)