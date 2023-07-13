import { Router } from "express";
import { renderSignUpForm, signup } from "../controllers/auth.controller.js";

const router = Router();

// Routes
router.get("/auth/signup", renderSignUpForm);

router.post("/auth/signup", signup);

export default router;
