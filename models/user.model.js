import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    // eslint-disable-next-line no-useless-escape
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 6,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
