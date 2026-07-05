import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
      default: 11900,
    },
    currency: {
      type: String,
      required: true,
      default: "INR",
    },
    paymentLinkId: {
      type: String,
      sparse: true,
      unique: true,
    },
    paymentLinkUrl: {
      type: String,
      default: "",
    },
    shortUrl: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    razorpayOrderId: {
      type: String,
      sparse: true,
      unique: true,
    },
    razorpayPaymentId: String,
    razorpaySignature: String,
    paymentLinkReferenceId: String,
    razorpayPaymentLinkStatus: String,
    description: {
      type: String,
      default: "3 Premium Courses — Launch Offer",
    },
  },
  {
    timestamps: true,
  },
);

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;
