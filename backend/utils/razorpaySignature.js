import crypto from "crypto";

export const generateRazorpaySignature = (orderId, paymentId, keySecret) => {
  return crypto
    .createHmac("sha256", keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");
};

export const verifyRazorpaySignature = (orderId, paymentId, signature, keySecret) => {
  if (!orderId || !paymentId || !signature || !keySecret) {
    return false;
  }

  return generateRazorpaySignature(orderId, paymentId, keySecret) === signature;
};
