import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/payment/success")({
  component: PaymentSuccess,
});

function PaymentSuccess() {
  const [status, setStatus] = useState<"loading" | "paid" | "failed" | "error">("loading");
  const [message, setMessage] = useState<string>("Verifying your payment...");
  const [details, setDetails] = useState<Record<string, string>>({});

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get("razorpay_payment_id") || "";
    const paymentLinkId = urlParams.get("razorpay_payment_link_id") || "";
    const paymentLinkStatus = urlParams.get("razorpay_payment_link_status") || "";

    if (!paymentId || !paymentLinkId) {
      setStatus("error");
      setMessage("Payment verification failed. Missing required payment details.");
      return;
    }

    const confirmPayment = async () => {
      try {
        const response = await fetch("/api/confirm-registration", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            paymentLinkId,
            paymentId,
            paymentLinkStatus,
            paymentLinkReferenceId: urlParams.get("razorpay_payment_link_reference_id") || "",
          }),
        });

        const data = await response.json();
        if (!response.ok) {
          setStatus("failed");
          setMessage(data?.message || "Payment could not be verified.");
          return;
        }

        setStatus(data?.data?.status === "paid" ? "paid" : "failed");
        setMessage(data?.message || "Payment verified successfully.");
        setDetails({
          status: data?.data?.status || "unknown",
          name: data?.data?.name || "-",
          email: data?.data?.email || "-",
          phone: data?.data?.phone || "-",
          paymentId: data?.data?.razorpayPaymentId || paymentId,
        });
      } catch (error) {
        setStatus("error");
        setMessage(
          error instanceof Error
            ? error.message
            : "Unable to verify payment at this time.",
        );
      }
    };

    confirmPayment();
  }, []);

  const headerText =
    status === "paid"
      ? "Payment Successful!"
      : status === "failed"
      ? "Payment Failed"
      : status === "error"
      ? "Verification Error"
      : "Checking Payment Status";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary to-primary-dark px-4 py-10">
      <div className="w-full max-w-lg rounded-3xl bg-card p-8 shadow-2xl">
        <div className="mb-6 flex justify-center">
          <div
            className={`rounded-full p-4 ${
              status === "paid"
                ? "bg-emerald-500/10"
                : status === "failed" || status === "error"
                ? "bg-destructive/10"
                : "bg-primary/10"
            }`}
          >
            <svg
              className={`h-10 w-10 ${
                status === "paid"
                  ? "text-emerald-500"
                  : status === "failed" || status === "error"
                  ? "text-destructive"
                  : "text-primary"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {status === "paid" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              )}
            </svg>
          </div>
        </div>

        <h1 className="text-center text-3xl font-bold text-foreground">{headerText}</h1>
        <p className="mt-3 text-center text-sm text-muted-foreground">{message}</p>

        {status !== "loading" && (
          <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Registration Summary
            </h2>
            <div className="space-y-3 text-sm text-foreground">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name</span>
                <span>{details.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email</span>
                <span>{details.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phone</span>
                <span>{details.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className={status === "paid" ? "text-emerald-400" : "text-destructive"}>
                  {details.status ?? status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment ID</span>
                <span>{details.paymentId}</span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Back to Home
          </a>
          {status === "paid" && (
            <a
              href="https://mail.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
            >
              Check Email
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
