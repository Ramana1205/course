import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_URI: process.env.MONGO_URI || "",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID || "",
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET || "",
  EMAIL_HOST: process.env.EMAIL_HOST || "",
  EMAIL_PORT: process.env.EMAIL_PORT || "",
  EMAIL_SECURE: process.env.EMAIL_SECURE || "false",
  EMAIL_USER: process.env.EMAIL_USER || "",
  EMAIL_PASS: process.env.EMAIL_PASS || "",
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME || "CodeSprint",
  EMAIL_FROM_ADDRESS: process.env.EMAIL_FROM_ADDRESS || "noreply@codesprint.com",
};

export default env;
