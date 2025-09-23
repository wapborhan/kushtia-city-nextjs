import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    name: { type: String },
    email: { type: String, required: true, unique: true },
    photo: String,
    gender: String,
    badge: String,
    contNum: String,
    address: String,
    role: { type: String, default: "user" },
    status: { type: String, default: "inactive" },
    bloodGroup: String,
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
