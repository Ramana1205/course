import { getRazorpayInstance } from "../config/razorpay.js";
import { sendSuccess, sendError } from "../utils/apiResponse.js";
import Registration from "../models/Registration.js";

export const createOrder = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Validate input
    if (!name || !email || !phone) {
      return sendError(res, 400, "Missing required fields: name, email, phone");
    }

    const razorpay = getRazorpayInstance();
    if (!razorpay) {
      return sendError(res, 500, "Payment system not configured");
    }

    const paymentLink = await razorpay.paymentLink.create({
      amount: 11900, // 119 INR in paise
      currency: "INR",
      description: "3 Premium Courses — Launch Offer",
      customer: {
        name,
        email,
        contact: phone,
      },
      notify: {
        sms: false,
        email: true,
      },
      callback_url: `${process.env.CLIENT_URL || "http://localhost:5173"}/payment/success`,
      callback_method: "get",
    });

    const paymentLinkUrl = paymentLink.url || paymentLink.short_url || "";

    const registration = new Registration({
      name,
      email,
      phone,
      amount: 11900,
      currency: "INR",
      paymentLinkId: paymentLink.id,
      paymentLinkUrl,
      shortUrl: paymentLink.short_url || paymentLink.url || "",
      status: "pending",
      paymentLinkReferenceId: paymentLink.reference_id,
      razorpayPaymentLinkStatus: paymentLink.status,
    });

    await registration.save();

    const linkData = {
      id: paymentLink.id,
      short_url: paymentLink.short_url,
      url: paymentLinkUrl,
      customer: { name, email, phone },
    };

    return sendSuccess(res, 200, linkData, "Payment link created successfully");
  } catch (error) {
    console.error("Payment link creation error:", error);
    const message =
      (error && typeof error === "object" && (error.message || error.description || error.error?.description)) ||
      String(error) ||
      "Failed to create payment link";
    return sendError(res, 500, message);
  }
};
