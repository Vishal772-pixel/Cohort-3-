import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import Order from "../models/Order.js";

// @desc    Get logged-in user's profile
// @route   GET /api/user/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json({
    success: true,
    message: "User profile fetched successfully",
    user,
  });
});

// @desc    Get all orders placed by the logged-in user
// @route   GET /api/user/orders
// @access  Private
export const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ userId: req.user._id }).sort({
    createdAt: -1,
  });

  res.status(200).json({
    success: true,
    message: "User orders fetched successfully",
    count: orders.length,
    orders,
  });
});

// @desc    Update user's profile
// @route   PUT /api/user/update
// @access  Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  const { name, address, contact } = req.body;

  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Update only if provided
  if (name) user.name = name;
  if (address) user.address = address;
  if (contact) user.contact = contact;

  const updatedUser = await user.save();

  res.status(200).json({
    success: true,
    message: "User profile updated successfully",
    user: {
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      address: updatedUser.address,
      contact: updatedUser.contact,
    },
  });
});

