import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  order_id: z.string().trim().min(1).optional(),
  payment_id: z.string().trim().min(1).optional(),
  signature: z.string().trim().min(1).optional(),
  razorpay_order_id: z.string().trim().min(1).optional(),
  razorpay_payment_id: z.string().trim().min(1).optional(),
  razorpay_signature: z.string().trim().min(1).optional(),
});

export const Route = createFileRoute("/api/verify-payment")({
  server: {
    handlers: {
      OPTIONS: async () => {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        });
      },
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const parsed = schema.safeParse(body);
          if (!parsed.success) {
            return new Response(
              JSON.stringify({ error: "Invalid input", details: parsed.error.flatten() }),
              { status: 400, headers: { "Content-Type": "application/json" } },
            );
          }

          const backendUrl = process.env.BACKEND_URL || "http://localhost:5000";
          const response = await fetch(`${backendUrl}/api/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(parsed.data),
          });

          const text = await response.text();
          let data: any = null;
          if (text) {
            try {
              data = JSON.parse(text);
            } catch {
              data = null;
            }
          }

          if (!response.ok) {
            return new Response(
              JSON.stringify({
                error: data?.message || data?.error || `Failed to verify payment (${response.status})`,
              }),
              { status: response.status, headers: { "Content-Type": "application/json" } },
            );
          }

          return new Response(JSON.stringify(data || { success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          return new Response(
            JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }
      },
    },
  },
});
