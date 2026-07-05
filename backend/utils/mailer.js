import nodemailer from "nodemailer";
import env from "../config/env.js";

let transporter = null;

export const getTransporter = () => {
  if (transporter) return transporter;

  if (!env.EMAIL_HOST || !env.EMAIL_PORT || !env.EMAIL_USER || !env.EMAIL_PASS) {
    throw new Error("Email configuration is incomplete. Set EMAIL_HOST, EMAIL_PORT, EMAIL_USER, and EMAIL_PASS in .env.");
  }

  transporter = nodemailer.createTransport({
    host: env.EMAIL_HOST,
    port: Number(env.EMAIL_PORT),
    secure: env.EMAIL_SECURE === "true",
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASS,
    },
  });

  return transporter;
};

export const sendConfirmationEmail = async ({ name, email, paymentId, paymentLinkId }) => {
  const transporter = getTransporter();
  const info = await transporter.sendMail({
    from: `${env.EMAIL_FROM_NAME || "CodeSprint"} <${env.EMAIL_FROM_ADDRESS}>`,
    to: email,
    subject: "Your CodeSprint registration is confirmed",
    html: `
      <div style="font-family: Arial, sans-serif; color: #111;">
        <h2 style="color: #1f2937;">Payment Confirmed</h2>
        <p>Hi ${name},</p>
        <p>Thank you for registering for CodeSprint. Your payment has been successfully received.</p>
        <ul>
          <li><strong>Payment ID:</strong> ${paymentId}</li>
          <li><strong>Payment Link ID:</strong> ${paymentLinkId}</li>
          <li><strong>Amount:</strong> ₹119</li>
        </ul>
        <p>You now have access to all 3 premium courses. We have sent your access details to this email address.</p>
        <p>Happy learning!</p>
        <p>— The CodeSprint Team</p>
      </div>
    `,
  });

  return info;
};
