import { Router } from "express";
import {
  createNewTask,
  renderAllTask,
  renderTaskForm,
  renderTaskEditForm,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

//All Task

router.get("/task", isAuthenticated, renderAllTask);

//New Task

router.get("/task/new-task", isAuthenticated, renderTaskForm);

router.post("/task/new-task", isAuthenticated, createNewTask);

//Edit Task

router.get("/task/edit/:id", isAuthenticated, renderTaskEditForm);

router.put("/task/edit/:id", isAuthenticated, updateTask);

//Delete Task

router.delete("/task/delete/:id", isAuthenticated, deleteTask);

export default router;
