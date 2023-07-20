import { Router } from "express";
import { renderTask } from "../controllers/task.controller.js";

const router = Router();

router.get("/task", renderTask);

export default router;
