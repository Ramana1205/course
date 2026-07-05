import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Mail, MessageCircle, Home, ArrowLeft } from "lucide-react";

// WhatsApp support number
const WHATSAPP_NUMBER = "919876543210"; // Replace with your WhatsApp number

export const Route = createFileRoute("/payment/success")({
  component: PaymentSuccess,
});

function PaymentSuccess() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const [details, setDetails] = useState<Record<string, string | number | undefined>>({
    name: undefined,
    email: undefined,
    phone: undefined,
    paymentId: undefined,
    orderId: undefined,
    amount: undefined,
  });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    setTimeout(() => setIsAnimating(true), 100);

    // Read all data from URL search params (no API call needed - verification already done in RegisterModal)
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get("order_id");
    const paymentId = urlParams.get("payment_id");
    const amount = urlParams.get("amount");
    const name = urlParams.get("name");
    const email = urlParams.get("email");
    const phone = urlParams.get("phone");

    // Check if required fields are present
    if (!orderId || !paymentId || !amount) {
      setHasError(true);
      return;
    }

    // Populate details from URL params
    setDetails({
      name: name || "Valued Customer",
      email: email || "-",
      phone: phone || "-",
      paymentId: paymentId,
      orderId: orderId,
      amount: amount ? `₹${parseInt(amount) / 100}` : "₹119",
      timestamp: new Date().toLocaleString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  }, []);

  const handleBackHome = () => {
    router.navigate({ to: "/" });
  };

  const handleContactSupport = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };

  // Show error state if payment information is missing
  if (hasError) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-pink-500/5 blur-3xl animate-pulse" style={{animationDelay: "2s"}} />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
          <div className="w-full max-w-2xl">
            <div className={`glass rounded-3xl p-8 shadow-2xl transition-all duration-1000 sm:p-12 ${
              isAnimating ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10">
                <span className="text-4xl">⚠️</span>
              </div>

              <h1 className="text-center font-[Sora] text-4xl font-bold text-foreground sm:text-5xl">
                Payment Information Not Found
              </h1>

              <p className="mt-4 text-center text-lg text-muted-foreground">
                We couldn't retrieve your payment details. This may have been a session error.
              </p>

              <div className="mt-8">
                <button
                  onClick={handleBackHome}
                  className="w-full flex items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 active:scale-95"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Return Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-pink-500/5 blur-3xl animate-pulse" style={{animationDelay: "2s"}} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl">
          {/* Success card with animation */}
          <div
            className={`glass rounded-3xl p-8 shadow-2xl transition-all duration-1000 sm:p-12 ${
              isAnimating
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Animated success icon */}
            <div
              className={`mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 transition-all duration-1000 ${
                isAnimating ? "scale-100" : "scale-0"
              }`}
            >
              <CheckCircle2
                className={`h-12 w-12 text-emerald-500 transition-all duration-1000 ${
                  isAnimating ? "scale-100" : "scale-0"
                }`}
              />
            </div>

            {/* Heading */}
            <h1 className="text-center font-[Sora] text-4xl font-bold text-foreground sm:text-5xl">
              🎉 Payment Successful!
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-center text-lg text-muted-foreground">
              Thank you, <span className="font-semibold text-foreground">{details.name}</span>!
            </p>

            {/* Status message */}
            <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center">
              <p className="text-base font-medium text-foreground">✓ Payment Successful</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Your payment has been received and verified successfully.
              </p>
            </div>

            {/* Payment details */}
            {(
              <div className="mt-8 space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Payment Details
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Amount Paid", value: details.amount, icon: "💰" },
                    { label: "Payment ID", value: details.paymentId, icon: "🔐" },
                    { label: "Order ID", value: details.orderId, icon: "📦" },
                    { label: "Email", value: details.email, icon: "📧" },
                    { label: "Phone", value: details.phone, icon: "📱" },
                    {
                      label: "Date & Time",
                      value: details.timestamp,
                      icon: "🕐",
                      fullWidth: true,
                    },
                  ].map((item: any) => (
                    <div
                      key={item.label}
                      className={`rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 ${
                        item.fullWidth ? "sm:col-span-2" : ""
                      }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {item.icon} {item.label}
                      </p>
                      <p className="mt-2 break-all font-mono text-sm font-medium text-foreground">
                        {item.value || "-"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next steps */}
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="font-semibold text-foreground">What happens next?</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                    1
                  </span>
                  <span>
                    Your payment has been received successfully.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                    2
                  </span>
                  <span>
                    Our team will verify your registration details.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                    3
                  </span>
                  <span>
                    You will receive your course access and further instructions via Email/WhatsApp within 24 hours.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-xs italic text-muted-foreground">
                If you do not receive any communication within 24 hours, please contact our support team.
              </p>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={handleBackHome}
                className="flex items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 active:scale-95"
              >
                <Home className="h-5 w-5" />
                Back to Home
              </button>
              <button
                onClick={handleContactSupport}
                className="flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                Contact Support
              </button>
            </div>

            {/* Support links */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:support@codesprint.com"
                className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <p className="text-sm font-medium text-foreground">support@codesprint.com</p>
                </div>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
              >
                <MessageCircle className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    WhatsApp
                  </p>
                  <p className="text-sm font-medium text-foreground">Chat with us</p>
                </div>
              </a>
            </div>
          </div>

          {/* Floating support bubble */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Have questions?{" "}
              <button
                onClick={handleContactSupport}
                className="font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Get help from our support team
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
