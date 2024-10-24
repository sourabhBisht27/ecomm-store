import { Router } from "express";
import {
  login,
  logout,
  refreshAccessToken,
  signup,
} from "../controller/auth.controller.js";

const router = Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshAccessToken);
// router.get("/profile", protectRoute, getProfile)

export default router;
