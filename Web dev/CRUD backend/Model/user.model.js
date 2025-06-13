import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// 1️⃣ User Schema with proper timestamps
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    address: {
      street: String,
      city: String,
      state: String,
      postalcode: String,
      country: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order", // Capitalize if your model name is "Order"
      },
    ],
  },
  { timestamps: true } // ✅ Yeh schema ke 2nd argument mein aata hai
);

// 2️⃣ Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// 3️⃣ Check if password is correct
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// 4️⃣ Check if user is admin
userSchema.methods.isAdmin = function () {
  return this.role === "admin";
};

// 5️⃣ Export model
const User = mongoose.model("User", userSchema);
export default User;
