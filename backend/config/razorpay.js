import Razorpay from "razorpay";
import env from "./env.js";

let razorpayInstance = null;

export const initRazorpay = async () => {
  if (!env.RAZORPAY_KEY_ID || !env.RAZORPAY_KEY_SECRET) {
    console.warn("Razorpay credentials are not configured. Payment integration is not initialized.");
    return null;
  }

  razorpayInstance = new Razorpay({
    key_id: env.RAZORPAY_KEY_ID,
    key_secret: env.RAZORPAY_KEY_SECRET
  });

  return razorpayInstance;
};

export const getRazorpayInstance = () => razorpayInstance;
