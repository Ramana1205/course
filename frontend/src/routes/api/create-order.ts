import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(20),
});

export const Route = createFileRoute("/api/create-order")({
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

          // Forward the request to the backend
          const backendUrl = process.env.BACKEND_URL || "http://localhost:5000";
          const response = await fetch(`${backendUrl}/api/create-order`, {
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
                error: data?.message || data?.error || `Failed to create payment link (${response.status})`,
              }),
              { status: response.status, headers: { "Content-Type": "application/json" } },
            );
          }

          const paymentLinkData = data?.data || data;
          if (!paymentLinkData) {
            return new Response(
              JSON.stringify({ error: "No payment data returned from backend" }),
              { status: 502, headers: { "Content-Type": "application/json" } },
            );
          }

          return new Response(JSON.stringify(paymentLinkData), {
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