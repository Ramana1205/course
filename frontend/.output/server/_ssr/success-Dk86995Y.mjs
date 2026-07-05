import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/success-Dk86995Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PaymentSuccess() {
	const [status, setStatus] = (0, import_react.useState)("loading");
	const [message, setMessage] = (0, import_react.useState)("Verifying your payment...");
	const [details, setDetails] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
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
						paymentLinkReferenceId: urlParams.get("razorpay_payment_link_reference_id") || ""
					})
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
					paymentId: data?.data?.razorpayPaymentId || paymentId
				});
			} catch (error) {
				setStatus("error");
				setMessage(error instanceof Error ? error.message : "Unable to verify payment at this time.");
			}
		};
		confirmPayment();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-gradient-to-br from-primary to-primary-dark px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-lg rounded-3xl bg-card p-8 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `rounded-full p-4 ${status === "paid" ? "bg-emerald-500/10" : status === "failed" || status === "error" ? "bg-destructive/10" : "bg-primary/10"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: `h-10 w-10 ${status === "paid" ? "text-emerald-500" : status === "failed" || status === "error" ? "text-destructive" : "text-primary"}`,
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: status === "paid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M5 13l4 4L19 7"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							})
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-center text-3xl font-bold text-foreground",
					children: status === "paid" ? "Payment Successful!" : status === "failed" ? "Payment Failed" : status === "error" ? "Verification Error" : "Checking Payment Status"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-sm text-muted-foreground",
					children: message
				}),
				status !== "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground",
						children: "Registration Summary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-sm text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: details.name })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: details.email })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: details.phone })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: status === "paid" ? "text-emerald-400" : "text-destructive",
									children: details.status ?? status
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Payment ID"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: details.paymentId })]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90",
						children: "Back to Home"
					}), status === "paid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://mail.google.com",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-accent",
						children: "Check Email"
					})]
				})
			]
		})
	});
}
//#endregion
export { PaymentSuccess as component };
