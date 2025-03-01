import mongoose from "mongoose";
import { DATABASE_URL, NODE_ENV } from "../config/env.js";

if (!DATABASE_URL) {
  throw new Error("Please provide a database URL");
}

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);

    console.log(`MongoDB connected: ${NODE_ENV}`);
  } catch (error) {
    console.error(error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

export default connectDB;
