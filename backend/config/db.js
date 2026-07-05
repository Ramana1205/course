import mongoose from "mongoose";
import env from "./env.js";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    return;
  }

  if (!env.MONGO_URI) {
    const error = new Error("MONGO_URI is not defined in .env");
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }

  try {
    await mongoose.connect(env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000
    });

    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};
