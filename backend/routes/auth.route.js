import { Router } from "express";
import { signup } from "../controller/auth.controller.js";

const router = Router();
router.get("/signup", signup);

export default router;
