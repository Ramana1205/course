import { getRazorpayInstance } from "../config/razorpay.js";
import env from "../config/env.js";
import { sendSuccess, sendError } from "../utils/apiResponse.js";
import Registration from "../models/Registration.js";
import { verifyRazorpaySignature } from "../utils/razorpaySignature.js";

const DEFAULT_AMOUNT = 11900;
const DEFAULT_CURRENCY = "INR";
const DEFAULT_DESCRIPTION = "3 Premium Courses — Launch Offer";

export const createOrder = async (req, res) => {
  try {
    const { name, email, phone, amount, currency, receipt } = req.body;

    if (!name || !email || !phone) {
      return sendError(res, 400, "Missing required fields: name, email, phone");
    }

    const normalizedAmount = Number(amount ?? DEFAULT_AMOUNT);
    if (!Number.isInteger(normalizedAmount) || normalizedAmount < 100) {
      return sendError(res, 400, "Amount must be at least 100 paise");
    }

    const normalizedCurrency = String(currency || DEFAULT_CURRENCY).toUpperCase();
    if (normalizedCurrency !== DEFAULT_CURRENCY) {
      return sendError(res, 400, "Only INR is supported at the moment");
    }

    const razorpay = getRazorpayInstance();
    if (!razorpay) {
      return sendError(res, 500, "Payment system not configured");
    }

    const order = await razorpay.orders.create({
      amount: normalizedAmount,
      currency: normalizedCurrency,
      receipt: String(receipt || `codesprint-${Date.now()}`),
      notes: {
        name,
        email,
        phone,
        description: DEFAULT_DESCRIPTION,
      },
    });

    const registration = new Registration({
      name,
      email,
      phone,
      amount: normalizedAmount,
      currency: normalizedCurrency,
      paymentLinkId: order.id,
      paymentLinkUrl: "",
      shortUrl: "",
      status: "pending",
      paymentLinkReferenceId: order.receipt,
      razorpayPaymentLinkStatus: "created",
      razorpayOrderId: order.id,
      description: DEFAULT_DESCRIPTION,
    });

    await registration.save();

    return sendSuccess(
      res,
      200,
      {
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
      },
      "Order created successfully",
    );
  } catch (error) {
    console.error("Order creation error:", error);
    const message =
      (error && typeof error === "object" && (error.message || error.description || error.error?.description)) ||
      String(error) ||
      "Failed to create order";
    return sendError(res, 500, message);
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const {
      order_id,
      payment_id,
      signature,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const normalizedOrderId = order_id || razorpay_order_id;
    const normalizedPaymentId = payment_id || razorpay_payment_id;
    const normalizedSignature = signature || razorpay_signature;

    if (!normalizedOrderId || !normalizedPaymentId || !normalizedSignature) {
      return sendError(res, 400, "Missing required payment verification fields");
    }

    const isValid = verifyRazorpaySignature(
      normalizedOrderId,
      normalizedPaymentId,
      normalizedSignature,
      env.RAZORPAY_KEY_SECRET,
    );

    if (!isValid) {
      return sendError(res, 400, "Payment verification failed");
    }

    const registration = await Registration.findOneAndUpdate(
      { razorpayOrderId: normalizedOrderId },
      {
        status: "paid",
        razorpayPaymentId: normalizedPaymentId,
        razorpaySignature: normalizedSignature,
        razorpayPaymentLinkStatus: "paid",
      },
      { new: true },
    );

    if (!registration) {
      return sendError(res, 404, "Registration record not found");
    }

    return sendSuccess(
      res,
      200,
      {
        status: "paid",
        order_id: normalizedOrderId,
        payment_id: normalizedPaymentId,
      },
      "Payment verified successfully",
    );
  } catch (error) {
    console.error("Payment verification error:", error);
    const message =
      (error && typeof error === "object" && (error.message || error.description || error.error?.description)) ||
      String(error) ||
      "Failed to verify payment";
    return sendError(res, 500, message);
  }
};
