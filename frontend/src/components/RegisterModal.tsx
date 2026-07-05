import { useState } from "react";
import { z } from "zod";
import { Loader2, X, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z
    .string()
    .trim()
    .regex(/^[+0-9\s\-()]{7,20}$/, "Enter a valid phone number"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

type RazorpayCheckoutInstance = {
  open: () => void;
  on: (event: string, handler: (response: Record<string, unknown>) => void) => void;
};

declare global {
  interface Window {
    Razorpay?: new (opts: Record<string, unknown>) => RazorpayCheckoutInstance;
  }
}

export function RegisterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");
    setMessage(null);

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, amount: 11900, currency: "INR", receipt: `codesprint-${Date.now()}` }),
      });

      const text = await res.text();
      let responseData: any = null;
      if (text) {
        try {
          responseData = JSON.parse(text);
        } catch {
          responseData = null;
        }
      }

      if (!res.ok) {
        throw new Error(
          responseData?.message ?? responseData?.error ?? `Failed to create order (${res.status})`,
        );
      }

      if (!responseData) {
        throw new Error("No payment data received from server");
      }

      if (responseData.success === false) {
        throw new Error(responseData.message ?? responseData.error ?? "Failed to create order");
      }

      const paymentData = responseData.data || responseData;
      if (!paymentData?.order_id) {
        throw new Error("No order ID received from server");
      }

      if (!window.Razorpay) {
        throw new Error("Razorpay checkout is unavailable right now");
      }

      const checkout = new window.Razorpay({
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || "",
        amount: paymentData.amount,
        currency: paymentData.currency || "INR",
        order_id: paymentData.order_id,
        name: "CodeSprint",
        description: "3 Premium Courses — Launch Offer",
        prefill: {
          name: parsed.data.name,
          email: parsed.data.email,
          contact: parsed.data.phone,
        },
        notes: {
          email: parsed.data.email,
          phone: parsed.data.phone,
        },
        theme: {
          color: "#7c3aed",
        },
        modal: {
          ondismiss: () => {
            setStatus("idle");
            setMessage("Payment cancelled. You can try again anytime.");
          },
        },
        handler: async (response: { razorpay_payment_id?: string; razorpay_order_id?: string; razorpay_signature?: string }) => {
          try {
            setStatus("submitting");
            setMessage("Verifying your payment...");

            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                order_id: response.razorpay_order_id,
                payment_id: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            });

            const verifyText = await verifyRes.text();
            let verifyData: any = null;
            if (verifyText) {
              try {
                verifyData = JSON.parse(verifyText);
              } catch {
                verifyData = null;
              }
            }

            if (!verifyRes.ok || verifyData?.success === false) {
              throw new Error(verifyData?.message || verifyData?.error || "Payment verification failed");
            }

            setStatus("success");
            setMessage(verifyData?.message || "Payment verified successfully");
          } catch (err) {
            setStatus("error");
            setMessage(err instanceof Error ? err.message : "Something went wrong");
          }
        },
      });

      const razorpayInstance = checkout as unknown as RazorpayCheckoutInstance & {
        on: (event: string, handler: (response: Record<string, unknown>) => void) => void;
      };
      razorpayInstance.on("payment.failed", (response: Record<string, unknown>) => {
        setStatus("error");
        setMessage(
          (response.error as { description?: string } | undefined)?.description ||
            "Payment failed. Please try again.",
        );
      });
      razorpayInstance.open();
      setMessage("Please complete the payment in the popup.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="glass relative w-full max-w-md rounded-2xl p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Launch Offer
          </p>
          <h2 className="mt-1 font-[Sora] text-2xl font-bold text-foreground">
            Claim your seat for{" "}
            <span className="gradient-text">₹119</span>
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            One-time payment. Lifetime access to all 3 courses.
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
            <p className="mt-3 font-semibold text-foreground">You're in!</p>
            <p className="mt-1 text-sm text-muted-foreground">{message}</p>
            <button
              onClick={onClose}
              className="mt-4 rounded-lg gradient-bg px-5 py-2 text-sm font-semibold text-primary-foreground"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4" noValidate>
            {(["name", "email", "phone"] as const).map((field) => (
              <div key={field}>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {field === "phone" ? "Phone Number" : field}
                </label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder={
                    field === "name"
                      ? "Ada Lovelace"
                      : field === "email"
                        ? "you@example.com"
                        : "+91 98xxxxxxxx"
                  }
                  maxLength={field === "phone" ? 20 : field === "email" ? 160 : 80}
                  autoComplete={field === "phone" ? "tel" : field}
                />
                {errors[field] && (
                  <p className="mt-1 text-xs text-destructive">{errors[field]}</p>
                )}
              </div>
            ))}

            {status === "error" && message && (
              <p className="rounded-lg border border-destructive/40 bg-destructive/10 p-2 text-xs text-destructive">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="animate-pulse-glow flex w-full items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition hover:opacity-95 disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Creating order…
                </>
              ) : (
                <>Pay ₹119 & Register Now</>
              )}
            </button>
            <p className="text-center text-[11px] text-muted-foreground">
              Secure checkout via Razorpay · UPI · Cards · Netbanking
            </p>
          </form>
        )}
      </div>
    </div>
  );
}