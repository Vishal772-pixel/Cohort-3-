import mongoose from "mongoose";

// Cart schema
const cartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId,
 ref: "User", 
required: true },

    itemId: { type: mongoose.Schema.Types.ObjectId, 
ref: "Product",
 required: true },

    quantity: { type: Number,
 required: true,
 default: 1 },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;