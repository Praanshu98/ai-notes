import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    notes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note",
      },
    ],
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
