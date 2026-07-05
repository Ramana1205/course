import test from "node:test";
import assert from "node:assert/strict";
import { generateRazorpaySignature, verifyRazorpaySignature } from "../utils/razorpaySignature.js";

test("generates the expected Razorpay signature", () => {
  const signature = generateRazorpaySignature("order_123", "pay_456", "secret_abc");

  assert.equal(signature, "2896de48d3870c82fe02275b972c7e852d4ca27359f4e86cbf859775bd4df6dc");
});

test("verifies matching signatures and rejects mismatches", () => {
  const signature = generateRazorpaySignature("order_123", "pay_456", "secret_abc");

  assert.equal(verifyRazorpaySignature("order_123", "pay_456", signature, "secret_abc"), true);
  assert.equal(verifyRazorpaySignature("order_123", "pay_456", "invalid", "secret_abc"), false);
});
