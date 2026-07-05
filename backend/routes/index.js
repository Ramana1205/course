import express from "express";
import { getHealth } from "../controllers/healthController.js";
import { createOrder, verifyPayment } from "../controllers/orderController.js";
import { confirmRegistration } from "../controllers/registrationController.js";

const router = express.Router();

router.get("/health", getHealth);
router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);
router.post("/confirm-registration", confirmRegistration);

export default router;
