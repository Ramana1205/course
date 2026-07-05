import { a as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as CircleCheck, l as MessageCircle, p as House, u as Mail, x as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/success-BoOpATEO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP_NUMBER = "919876543210";
function PaymentSuccess() {
	const router = useRouter();
	const [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
	const [details, setDetails] = (0, import_react.useState)({
		name: void 0,
		email: void 0,
		phone: void 0,
		paymentId: void 0,
		orderId: void 0,
		amount: void 0
	});
	const [hasError, setHasError] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setTimeout(() => setIsAnimating(true), 100);
		const urlParams = new URLSearchParams(window.location.search);
		const orderId = urlParams.get("order_id");
		const paymentId = urlParams.get("payment_id");
		const amount = urlParams.get("amount");
		const name = urlParams.get("name");
		const email = urlParams.get("email");
		const phone = urlParams.get("phone");
		if (!orderId || !paymentId || !amount) {
			setHasError(true);
			return;
		}
		setDetails({
			name: name || "Valued Customer",
			email: email || "-",
			phone: phone || "-",
			paymentId,
			orderId,
			amount: amount ? `₹${parseInt(amount) / 100}` : "₹119",
			timestamp: (/* @__PURE__ */ new Date()).toLocaleString("en-IN", {
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "2-digit",
				minute: "2-digit"
			})
		});
	}, []);
	const handleBackHome = () => {
		router.navigate({ to: "/" });
	};
	const handleContactSupport = () => {
		window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
	};
	if (hasError) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-pink-500/5 blur-3xl animate-pulse",
				style: { animationDelay: "2s" }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 flex min-h-screen items-center justify-center px-4 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full max-w-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `glass rounded-3xl p-8 shadow-2xl transition-all duration-1000 sm:p-12 ${isAnimating ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl",
								children: "⚠️"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-center font-[Sora] text-4xl font-bold text-foreground sm:text-5xl",
							children: "Payment Information Not Found"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-center text-lg text-muted-foreground",
							children: "We couldn't retrieve your payment details. This may have been a session error."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleBackHome,
								className: "w-full flex items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-5 w-5" }), "Return Home"]
							})
						})
					]
				})
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-pink-500/5 blur-3xl animate-pulse",
				style: { animationDelay: "2s" }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 flex min-h-screen items-center justify-center px-4 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `glass rounded-3xl p-8 shadow-2xl transition-all duration-1000 sm:p-12 ${isAnimating ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 transition-all duration-1000 ${isAnimating ? "scale-100" : "scale-0"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: `h-12 w-12 text-emerald-500 transition-all duration-1000 ${isAnimating ? "scale-100" : "scale-0"}` })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-center font-[Sora] text-4xl font-bold text-foreground sm:text-5xl",
							children: "🎉 Payment Successful!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-center text-lg text-muted-foreground",
							children: [
								"Thank you, ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: details.name
								}),
								"!"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-medium text-foreground",
								children: "✓ Payment Successful"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Your payment has been received and verified successfully."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold uppercase tracking-widest text-primary",
								children: "Payment Details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									{
										label: "Amount Paid",
										value: details.amount,
										icon: "💰"
									},
									{
										label: "Payment ID",
										value: details.paymentId,
										icon: "🔐"
									},
									{
										label: "Order ID",
										value: details.orderId,
										icon: "📦"
									},
									{
										label: "Email",
										value: details.email,
										icon: "📧"
									},
									{
										label: "Phone",
										value: details.phone,
										icon: "📱"
									},
									{
										label: "Date & Time",
										value: details.timestamp,
										icon: "🕐",
										fullWidth: true
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 ${item.fullWidth ? "sm:col-span-2" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
										children: [
											item.icon,
											" ",
											item.label
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 break-all font-mono text-sm font-medium text-foreground",
										children: item.value || "-"
									})]
								}, item.label))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-foreground",
									children: "What happens next?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-4 space-y-3 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary",
												children: "1"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Your payment has been received successfully." })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary",
												children: "2"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Our team will verify your registration details." })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary",
												children: "3"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "You will receive your course access and further instructions via Email/WhatsApp within 24 hours." })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs italic text-muted-foreground",
									children: "If you do not receive any communication within 24 hours, please contact our support team."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleBackHome,
								className: "flex items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5 w-5" }), "Back to Home"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleContactSupport,
								className: "flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }), "Contact Support"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:support@codesprint.com",
								className: "flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground",
									children: "support@codesprint.com"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/${WHATSAPP_NUMBER}`,
								className: "flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
									children: "WhatsApp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground",
									children: "Chat with us"
								})] })]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							"Have questions?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleContactSupport,
								className: "font-semibold text-primary transition-colors hover:text-primary/80",
								children: "Get help from our support team"
							})
						]
					})
				})]
			})
		})]
	});
}
//#endregion
export { PaymentSuccess as component };
