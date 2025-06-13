
// server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../db/index.js";

import userRoutes from "../Route/user.route.js";
// import productRoutes from "../routes/product.route.js";
// import orderRoutes from "../routes/order.route.js";
// import adminRoutes from "../routes/admin.route.js";

import { notFound, errorHandler } from "../Middleware/error.middleware.js";

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Init express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/admin", adminRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000 ||3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
