import express from "express";
import {
  getUserProfile,
  getUserOrders,
  updateUserProfile,
} from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();


// Protect middleware ko call karke use kiya hai , that to use all this route ...user have to go through condition on protect Middleware

router.get("/profile", protect, getUserProfile);
router.get("/orders", protect, getUserOrders);
router.put("/update", protect, updateUserProfile);

export default router;