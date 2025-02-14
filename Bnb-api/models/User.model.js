import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    PropertyName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    CheckIn: {
      type: String,
      required: true,
    },
    CheckOut: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
export default User;
