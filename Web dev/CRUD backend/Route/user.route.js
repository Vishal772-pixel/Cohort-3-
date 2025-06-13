import express from "express";
import {
  getUserProfile,
  getUserOrders,
  updateUserProfile,
} from "../controller/user.controller.js";
import {protect} from "../middleware/auth.middleware.js";

const userRoutes = express.Router();


// Protect middleware ko call karke use kiya hai , that to use all this route ...user have to go through condition on protect Middleware

userRoutes.get("/profile", protect, getUserProfile);
userRoutes.get("/orders", protect, getUserOrders);
userRoutes.put("/update", protect, updateUserProfile);

export default userRoutes;