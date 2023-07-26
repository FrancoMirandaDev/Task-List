import { Router } from "express";
import {
  createNewTask,
  //renderAllTask,
  renderTaskForm,
} from "../controllers/task.controller.js";
import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

//router.get("/task", isAuthenticated, renderAllTask);

router.get("/task/new-task", isAuthenticated, renderTaskForm);

router.post("/task/new-task", isAuthenticated, createNewTask);

export default router;
