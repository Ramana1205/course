import Registration from "../models/Registration.js";
import { sendSuccess, sendError } from "../utils/apiResponse.js";
import { sendConfirmationEmail } from "../utils/mailer.js";

export const confirmRegistration = async (req, res) => {
  try {
    const { paymentLinkId, paymentId, paymentLinkStatus, paymentLinkReferenceId } = req.body;

    if (!paymentLinkId || !paymentId) {
      return sendError(res, 400, "Missing required payment confirmation fields.");
    }

    const status = paymentLinkStatus === "paid" ? "paid" : "failed";

    const registration = await Registration.findOneAndUpdate(
      { paymentLinkId },
      {
        status,
        razorpayPaymentId: paymentId,
        paymentLinkReferenceId,
        razorpayPaymentLinkStatus: paymentLinkStatus,
      },
      { new: true },
    );

    if (!registration) {
      return sendError(res, 404, "Registration record not found for this payment link.");
    }

    if (status === "paid") {
      try {
        await sendConfirmationEmail({
          name: registration.name,
          email: registration.email,
          paymentId,
          paymentLinkId,
        });
      } catch (emailError) {
        console.error("Confirmation email failed:", emailError);
      }
    }

    return sendSuccess(res, 200, {
      name: registration.name,
      email: registration.email,
      phone: registration.phone,
      status: registration.status,
      paymentLinkId: registration.paymentLinkId,
      razorpayPaymentId: registration.razorpayPaymentId,
      paymentLinkUrl: registration.paymentLinkUrl,
      shortUrl: registration.shortUrl,
    }, "Payment confirmed successfully.");
  } catch (error) {
    console.error("Registration confirmation error:", error);
    const message =
      (error && typeof error === "object" && (error.message || error.description || error.error?.description)) ||
      String(error) ||
      "Failed to confirm registration.";
    return sendError(res, 500, message);
  }
};
