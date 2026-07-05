import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  paymentLinkId: z.string().trim().min(1),
  paymentId: z.string().trim().min(1),
  paymentLinkStatus: z.string().trim().optional(),
  paymentLinkReferenceId: z.string().trim().optional(),
});

export const Route = createFileRoute("/api/confirm-registration")({
  server: {
    handlers: {
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
          const response = await fetch(`${backendUrl}/api/confirm-registration`, {
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
              data = { error: "Invalid backend response" };
            }
          }

          return new Response(JSON.stringify(data), {
            status: response.status,
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
