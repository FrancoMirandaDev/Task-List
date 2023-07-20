import { Router } from "express";

const router = Router();

router.get("/task", renderTask);

export default router;
