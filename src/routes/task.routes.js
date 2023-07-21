import { Router } from "express";
import { renderTask } from "../controllers/task.controller.js";
import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

router.get("/task", isAuthenticated, renderTask);

export default router;
