import { a as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_react, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as CircleCheck, a as Sparkles, b as Award, c as Play, d as LoaderCircle, f as Layers, g as Clock, h as CodeXml, i as Star, m as Database, n as X, o as ShieldCheck, r as Users, s as Rocket, t as Zap, v as ChevronDown, y as Check } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-K4OIQC7c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function getTarget() {
	if (typeof window === "undefined") return Date.now() + 3 * 864e5;
	const key = "cs_launch_deadline";
	const existing = window.localStorage.getItem(key);
	if (existing) return parseInt(existing, 10);
	const t = Date.now() + 3 * 864e5 + 7 * 36e5 + 42 * 6e4;
	window.localStorage.setItem(key, String(t));
	return t;
}
function CountdownTimer() {
	const [target] = (0, import_react.useState)(() => getTarget());
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(id);
	}, []);
	const diff = Math.max(0, target - now);
	const days = Math.floor(diff / 864e5);
	const hours = Math.floor(diff / 36e5 % 24);
	const minutes = Math.floor(diff / 6e4 % 60);
	const seconds = Math.floor(diff / 1e3 % 60);
	const cells = [
		{
			label: "Days",
			value: days
		},
		{
			label: "Hours",
			value: hours
		},
		{
			label: "Mins",
			value: minutes
		},
		{
			label: "Secs",
			value: seconds
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-2 sm:gap-3",
		children: cells.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 sm:gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass flex min-w-[60px] flex-col items-center rounded-xl px-3 py-2 sm:min-w-[76px] sm:px-4 sm:py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-[Sora] text-2xl font-bold tabular-nums text-foreground sm:text-3xl",
					children: String(c.value).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs",
					children: c.label
				})]
			}), i < cells.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xl font-bold text-primary sm:text-2xl",
				children: ":"
			})]
		}, c.label))
	});
}
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your full name").max(80),
	email: stringType().trim().email("Enter a valid email").max(160),
	phone: stringType().trim().regex(/^[+0-9\s\-()]{7,20}$/, "Enter a valid phone number")
});
function RegisterModal({ open, onClose }) {
	const router = useRouter();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)(null);
	if (!open) return null;
	const submit = async (e) => {
		e.preventDefault();
		const parsed = schema.safeParse(form);
		if (!parsed.success) {
			const fieldErrors = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
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
				body: JSON.stringify({
					...parsed.data,
					amount: 11900,
					currency: "INR",
					receipt: `codesprint-${Date.now()}`
				})
			});
			const text = await res.text();
			let responseData = null;
			if (text) try {
				responseData = JSON.parse(text);
			} catch {
				responseData = null;
			}
			if (!res.ok) throw new Error(responseData?.message ?? responseData?.error ?? `Failed to create order (${res.status})`);
			if (!responseData) throw new Error("No payment data received from server");
			if (responseData.success === false) throw new Error(responseData.message ?? responseData.error ?? "Failed to create order");
			const paymentData = responseData.data || responseData;
			if (!paymentData?.order_id) throw new Error("No order ID received from server");
			if (!window.Razorpay) throw new Error("Razorpay checkout is unavailable right now");
			const options = {
				key: "rzp_live_T9kro7NEYJGsxh",
				amount: paymentData.amount,
				currency: paymentData.currency || "INR",
				order_id: paymentData.order_id,
				name: "CodeSprint",
				description: "3 Premium Courses — Launch Offer",
				prefill: {
					name: parsed.data.name,
					email: parsed.data.email,
					contact: parsed.data.phone
				},
				notes: {
					email: parsed.data.email,
					phone: parsed.data.phone
				},
				theme: { color: "#7c3aed" },
				modal: { ondismiss: () => {
					setStatus("idle");
					setMessage("Payment cancelled. You can try again anytime.");
				} },
				handler: async (response) => {
					try {
						setStatus("submitting");
						setMessage("Verifying your payment...");
						const verifyRes = await fetch("/api/verify-payment", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								order_id: response.razorpay_order_id,
								payment_id: response.razorpay_payment_id,
								signature: response.razorpay_signature
							})
						});
						const verifyText = await verifyRes.text();
						let verifyData = null;
						if (verifyText) try {
							verifyData = JSON.parse(verifyText);
						} catch {
							verifyData = null;
						}
						if (!verifyRes.ok || verifyData?.success === false) throw new Error(verifyData?.message || verifyData?.error || "Payment verification failed");
						setStatus("success");
						setMessage(verifyData?.message || "Payment verified successfully");
						setTimeout(() => {
							const successUrl = `/payment-success?order_id=${response.razorpay_order_id}&payment_id=${response.razorpay_payment_id}&amount=${paymentData.amount}`;
							router.navigate({ to: successUrl });
						}, 1500);
					} catch (err) {
						setStatus("error");
						setMessage(err instanceof Error ? err.message : "Something went wrong");
					}
				}
			};
			console.log({
				key: "rzp_live_T9kro7NEYJGsxh",
				order: paymentData,
				options
			});
			const razorpayInstance = new window.Razorpay(options);
			razorpayInstance.on("payment.failed", (response) => {
				setStatus("error");
				setMessage(response.error?.description || "Payment failed. Please try again.");
			});
			razorpayInstance.open();
			setMessage("Please complete the payment in the popup.");
		} catch (err) {
			setStatus("error");
			setMessage(err instanceof Error ? err.message : "Something went wrong");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass relative w-full max-w-md rounded-2xl p-6 shadow-2xl sm:p-8",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-white/10 hover:text-foreground",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-primary",
							children: "Launch Offer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-1 font-[Sora] text-2xl font-bold text-foreground",
							children: [
								"Claim your seat for",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-text",
									children: "₹119"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "One-time payment. Lifetime access to all 3 courses."
						})
					]
				}),
				status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-primary/30 bg-primary/10 p-4 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto h-10 w-10 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-semibold text-foreground",
							children: "You're in!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onClose,
							className: "mt-4 rounded-lg gradient-bg px-5 py-2 text-sm font-semibold text-primary-foreground",
							children: "Close"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-4",
					noValidate: true,
					children: [
						[
							"name",
							"email",
							"phone"
						].map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: field === "phone" ? "Phone Number" : field
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: field === "email" ? "email" : field === "phone" ? "tel" : "text",
								value: form[field],
								onChange: (e) => setForm({
									...form,
									[field]: e.target.value
								}),
								className: "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30",
								placeholder: field === "name" ? "Ada Lovelace" : field === "email" ? "you@example.com" : "+91 98xxxxxxxx",
								maxLength: field === "phone" ? 20 : field === "email" ? 160 : 80,
								autoComplete: field === "phone" ? "tel" : field
							}),
							errors[field] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors[field]
							})
						] }, field)),
						status === "error" && message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-lg border border-destructive/40 bg-destructive/10 p-2 text-xs text-destructive",
							children: message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: status === "submitting",
							className: "animate-pulse-glow flex w-full items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition hover:opacity-95 disabled:opacity-70",
							children: status === "submitting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Creating order…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Pay ₹119 & Register Now" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-[11px] text-muted-foreground",
							children: "Secure checkout via Razorpay · UPI · Cards · Netbanking"
						})
					]
				})
			]
		})
	});
}
var courses = [
	{
		icon: Database,
		title: "Think SQL: Zero to Hero",
		subtitle: "SQL for Data Analytics",
		image: "/assets/course-sql-CB2uE1bw.png",
		bullets: [
			"15+ in-depth recorded sessions",
			"50+ FAANG SQL interview problems",
			"2 portfolio projects on real datasets",
			"Intro to Tableau included"
		],
		tag: "Recorded"
	},
	{
		icon: CodeXml,
		title: "Data Structures with Python",
		subtitle: "Master DSA in Python",
		image: "/assets/course-python-CTfxH0_y.png",
		bullets: [
			"Tracks-based structured learning",
			"Diverse coding problems per topic",
			"Premium lecture videos",
			"Completion certificate"
		],
		tag: "Online Course"
	},
	{
		icon: Layers,
		title: "SIGMA — DSA + Web Dev",
		subtitle: "Complete MERN Full-Stack",
		image: "/assets/course-sigma-BO5Y9Zcl.png",
		bullets: [
			"Projects: Zerodha, Airbnb, Zoom, ChatGPT",
			"Docker, Kubernetes, WebRTC, AWS",
			"1:1 Live Resume Correction",
			"Quant & Aptitude prep + 2 certificates"
		],
		tag: "Flagship"
	}
];
var testimonials = [
	{
		name: "Ananya R.",
		role: "Data Analyst @ Flipkart",
		text: "Cleared 3 SQL rounds back-to-back. The interview problems were basically what I was asked in real interviews.",
		rating: 5
	},
	{
		name: "Rohan K.",
		role: "SDE-1 @ Razorpay",
		text: "The SIGMA track is unreal for the price. The MERN projects gave me actual talking points in interviews.",
		rating: 5
	},
	{
		name: "Meera S.",
		role: "CS Final Year, IIIT",
		text: "I paid ₹119 and got more than what my seniors paid ₹15k for elsewhere. No-brainer.",
		rating: 5
	},
	{
		name: "Vikram T.",
		role: "Software Engineer",
		text: "Docker + Kubernetes module alone was worth 10x the price. Clear, hands-on, no fluff.",
		rating: 5
	}
];
var faqs = [
	{
		q: "Is this really ₹119 for all 3 courses?",
		a: "Yes. This is a one-time launch offer for the first 1000 students. After that, the price returns to ₹8,000. No hidden fees, no upsells."
	},
	{
		q: "How long do I have access?",
		a: "Lifetime access to all recorded content, updates, and the private community. You can revisit anytime."
	},
	{
		q: "Do I need prior programming experience?",
		a: "No. All three courses start from absolute scratch and ramp up to advanced concepts."
	},
	{
		q: "Will I get a certificate?",
		a: "Yes, you receive completion certificates for each course, trusted by hiring partners."
	},
	{
		q: "What if I don't like it?",
		a: "We offer a 7-day no-questions-asked refund. Just email us and we'll process it."
	},
	{
		q: "How is payment handled?",
		a: "Payments are processed securely via Razorpay — UPI, Cards, Netbanking, and Wallets are supported."
	}
];
var curriculumModules = [
	{
		id: "module-1",
		number: "01",
		title: "Foundations",
		shortDesc: "Python basics, SQL syntax, Git, and terminal fundamentals",
		topics: [
			"Python Basics",
			"Variables & Data Types",
			"Control Flow (Loops & Conditionals)",
			"Functions & Scope",
			"Object-Oriented Programming",
			"Git & GitHub Basics",
			"Terminal & Command Line",
			"SQL Fundamentals",
			"Mini Project"
		]
	},
	{
		id: "module-2",
		number: "02",
		title: "Data Structures & Algorithms",
		shortDesc: "Master DSA patterns with 200+ curated problems",
		topics: [
			"Arrays & Strings",
			"Hash Maps & Sets",
			"Linked Lists",
			"Stacks & Queues",
			"Trees (Binary, BST, Balanced)",
			"Graphs & Traversals",
			"Dynamic Programming",
			"Greedy Algorithms",
			"Binary Search & Optimization",
			"Sliding Window Technique",
			"200+ Curated Problems",
			"Mock Coding Interviews"
		]
	},
	{
		id: "module-3",
		number: "03",
		title: "SQL for Analytics",
		shortDesc: "Advanced queries, window functions, and FAANG interview problems",
		topics: [
			"SELECT Queries & Filters",
			"GROUP BY & HAVING",
			"JOINs (INNER, LEFT, RIGHT, FULL)",
			"Window Functions (ROW_NUMBER, RANK, LAG, LEAD)",
			"Common Table Expressions (CTEs)",
			"Subqueries & Complex Joins",
			"Stored Procedures",
			"Query Optimization",
			"Real FAANG Interview Questions",
			"Tableau Introduction",
			"Data Visualization Basics"
		]
	},
	{
		id: "module-4",
		number: "04",
		title: "Full-Stack Web Development",
		shortDesc: "React, Node.js, MongoDB — build production-ready applications",
		topics: [
			"Frontend: HTML5 & CSS3",
			"JavaScript ES6+ & DOM",
			"React (Components, Hooks, State)",
			"Tailwind CSS & Styling",
			"State Management Patterns",
			"Backend: Node.js & Express.js",
			"MongoDB & Mongoose",
			"RESTful APIs & HTTP",
			"Authentication & JWT",
			"Email Integration & Nodemailer",
			"Razorpay Payment Integration",
			"Deployment & Production Patterns"
		]
	},
	{
		id: "module-5",
		number: "05",
		title: "Real-World Projects",
		shortDesc: "Build 6 full end-to-end production applications",
		topics: [
			"Project 1: Zerodha Clone (Stock Trading Platform)",
			"Project 2: Airbnb Clone (Booking Platform)",
			"Project 3: Zoom Clone (Video Conferencing with WebRTC)",
			"Project 4: ChatGPT Clone (AI Chat Interface)",
			"Project 5: School ERP (Enterprise Resource Planning)",
			"Project 6: AI Resume Builder (ML + Web Integration)",
			"Each with: Authentication, Payment Gateway, Admin Dashboard",
			"Deployment to Production",
			"Performance Optimization",
			"Security Best Practices"
		]
	},
	{
		id: "module-6",
		number: "06",
		title: "Infrastructure & Interview Prep",
		shortDesc: "Docker, Kubernetes, System Design, and interview mastery",
		topics: [
			"Docker Basics & Containerization",
			"Kubernetes Essentials",
			"AWS Fundamentals (EC2, S3, RDS)",
			"CI/CD Pipelines & GitHub Actions",
			"System Design Basics",
			"Scaling & Performance",
			"Resume Review & Optimization",
			"LinkedIn Profile Building",
			"Interview Communication Skills",
			"HR Interview Preparation",
			"Mock Technical Interviews (1:1)",
			"Salary Negotiation Tips"
		]
	}
];
function Index() {
	const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	const [seatsLeft, setSeatsLeft] = (0, import_react.useState)(147);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => {
			setSeatsLeft((s) => s > 27 ? s - 1 : s);
		}, 45e3);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[800px] hero-glow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 border-b border-white/5 bg-black/40 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs sm:text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground",
						children: [
							"Launch pricing ends soon —",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-foreground",
								children: [
									"Only ",
									seatsLeft,
									" seats left"
								]
							}),
							" at ₹119"
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "relative z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-5 sm:flex sm:justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-bg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "h-5 w-5 text-primary-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-[Sora] text-lg font-bold",
								children: "CodeSprint"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#courses",
									className: "hover:text-foreground",
									children: "Courses"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#curriculum",
									className: "hover:text-foreground",
									children: "Curriculum"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#instructor",
									className: "hover:text-foreground",
									children: "Instructor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#faq",
									className: "hover:text-foreground",
									children: "FAQ"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setModalOpen(true),
							className: "shrink-0 rounded-full gradient-bg px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-90",
							children: "Get for ₹119"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-8 sm:pt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex h-2 w-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [
										"Live now · First",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: "1000 students"
										}),
										" only"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 font-[Sora] text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
								children: [
									"Master",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gradient-text",
										children: "SQL, Python DSA"
									}),
									" &",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gradient-text",
										children: "Full-Stack"
									}),
									" —",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
									" for the price of coffee."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-base text-muted-foreground sm:text-lg",
								children: "3 flagship courses. 100+ hours of content. Real interview problems. Lifetime access. Launch offer for the first 1000 seats."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap items-baseline gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-[Sora] text-5xl font-black gradient-text sm:text-6xl",
										children: "₹119"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl text-muted-foreground line-through decoration-destructive/70 decoration-2 sm:text-2xl",
										children: "₹8,000"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary",
										children: "98% OFF"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Offer expires in"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownTimer, {})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setModalOpen(true),
									className: "animate-pulse-glow group flex items-center gap-2 rounded-xl gradient-bg px-7 py-4 text-base font-bold text-primary-foreground shadow-xl transition hover:opacity-95",
									children: ["Pay ₹119 & Register Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#courses",
									className: "flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), " See what you get"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-primary" }), " 7-day money back"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-primary" }), " 12,400+ students"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-primary text-primary" }), " 4.9 average rating"]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .95
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: .7,
							delay: .15
						},
						className: "relative mx-auto w-full max-w-md lg:max-w-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-[2rem] gradient-bg opacity-30 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass relative rounded-3xl p-6 shadow-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary",
											children: "Bundle · 3 courses"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "Lifetime"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 space-y-3",
										children: courses.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											initial: {
												opacity: 0,
												x: 20
											},
											animate: {
												opacity: 1,
												x: 0
											},
											transition: { delay: .3 + i * .1 },
											className: "flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-bg",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-6 w-6 text-primary-foreground" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0 flex-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "truncate text-sm font-semibold",
														children: c.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "truncate text-xs text-muted-foreground",
														children: c.subtitle
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 shrink-0 text-primary" })
											]
										}, c.title))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-center justify-between border-t border-white/10 pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] uppercase tracking-widest text-muted-foreground",
											children: "Total value"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg font-bold text-muted-foreground line-through",
											children: "₹8,000"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] uppercase tracking-widest text-primary",
												children: "You pay"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-[Sora] text-3xl font-black gradient-text",
												children: "₹119"
											})]
										})]
									})
								]
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 border-y border-white/5 bg-white/[0.02] py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-4",
					children: [
						{
							k: "12,400+",
							v: "Students enrolled"
						},
						{
							k: "100+ hrs",
							v: "Video content"
						},
						{
							k: "500+",
							v: "Interview problems"
						},
						{
							k: "4.9 / 5",
							v: "Average rating"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-[Sora] text-2xl font-bold gradient-text sm:text-3xl",
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground sm:text-sm",
							children: s.v
						})]
					}, s.v))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "courses",
				className: "relative z-10 mx-auto max-w-7xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-primary",
							children: "What you get"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-[Sora] text-3xl font-bold sm:text-4xl",
							children: "3 premium courses, one launch price"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Handpicked flagship programs — SQL for analytics, Python DSA, and full-stack MERN."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: courses.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: {
							duration: .5,
							delay: i * .08
						},
						className: "glass group relative overflow-hidden rounded-3xl transition hover:border-primary/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/10] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.image,
									alt: c.title,
									className: "h-full w-full object-cover transition duration-500 group-hover:scale-105",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur",
									children: c.tag
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-[Sora] text-xl font-bold",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: c.subtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2",
									children: c.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-sm text-foreground/90",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
									}, b))
								})
							]
						})]
					}, c.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "curriculum",
				className: "relative z-10 mx-auto max-w-7xl px-4 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-widest text-primary",
								children: "Curriculum"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-[Sora] text-3xl font-bold sm:text-4xl",
								children: "A path from zero to job-ready"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "Comprehensive, structured learning path covering everything from fundamentals to production deployment."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-12 max-w-4xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							defaultValue: "module-1",
							className: "space-y-3",
							children: curriculumModules.map((module) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 10
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { duration: .3 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: module.id,
									className: "glass rounded-2xl border-0 overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
										className: "flex items-center justify-between px-6 py-5 hover:no-underline group",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-4 text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-[Sora] text-2xl font-black gradient-text sm:text-3xl shrink-0",
												children: module.number
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-semibold text-foreground group-hover:text-primary transition-colors",
													children: module.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm text-muted-foreground",
													children: module.shortDesc
												})]
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
										className: "px-6 py-4 bg-white/[0.01] border-t border-white/5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-sm text-muted-foreground",
												children: [
													"This module covers ",
													module.topics.length,
													" comprehensive topics:"
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid gap-2 sm:grid-cols-2",
												children: module.topics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-2.5 transition hover:bg-white/[0.05]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 mt-0.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-medium text-foreground",
														children: topic
													})]
												}, topic))
											})]
										})
									})]
								})
							}, module.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: "100+ hours of video content"
								}),
								" • ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: "500+ interview problems"
								}),
								" • ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: "Lifetime access"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "All this at just ₹119 for the first 1000 students. Price increases after launch period."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "instructor",
				className: "relative z-10 mx-auto max-w-7xl px-4 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass grid gap-8 rounded-3xl p-8 md:grid-cols-[280px_1fr] md:items-center md:p-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto aspect-square w-48 md:w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-2 rounded-full gradient-bg opacity-40 blur-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative grid h-full w-full place-items-center rounded-full gradient-bg text-6xl font-black text-primary-foreground",
							children: "AS"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-primary",
							children: "Your Instructor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-[Sora] text-3xl font-bold sm:text-4xl",
							children: "Aditya Sharma"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Ex-Amazon · Ex-Uber · 10+ years shipping data & full-stack systems"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-foreground/90",
							children: "I've spent a decade interviewing engineers at top product companies. These 3 courses are the exact playbook I wish I'd had when I started — condensed, no fluff, and built around what actually gets people hired."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-6 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10+ yrs experience" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mentored 12,400+ devs" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-5 w-5 fill-primary text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4.9 rating" })]
								})
							]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 mx-auto max-w-7xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary",
						children: "Loved by learners"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-[Sora] text-3xl font-bold sm:text-4xl",
						children: "Real students. Real outcomes."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: { delay: i * .08 },
						className: "glass flex flex-col rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5",
								children: Array.from({ length: t.rating }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-primary text-primary" }, j))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 flex-1 text-sm text-foreground/90",
								children: [
									"\"",
									t.text,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 border-t border-white/5 pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: t.role
								})]
							})
						]
					}, t.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "faq",
				className: "relative z-10 mx-auto max-w-3xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary",
						children: "FAQ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-[Sora] text-3xl font-bold sm:text-4xl",
						children: "Questions, answered."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-3",
					children: faqs.map((f, i) => {
						const open = openFaq === i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass overflow-hidden rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpenFaq(open ? null : i),
								className: "flex w-full items-center justify-between gap-4 p-5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 text-muted-foreground transition ${open ? "rotate-180 text-primary" : ""}` })]
							}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-5 pb-5 text-sm text-muted-foreground",
								children: f.a
							})]
						}, f.q);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 mx-auto max-w-7xl px-4 pb-32 pt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass relative overflow-hidden rounded-3xl p-8 text-center sm:p-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 hero-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-[Sora] text-3xl font-bold sm:text-5xl",
								children: [
									"Only ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "gradient-text",
										children: [seatsLeft, " seats"]
									}),
									" left at",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gradient-text",
										children: "₹119"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-xl text-muted-foreground",
								children: "Lock in lifetime access before the timer hits zero. Price jumps back to ₹8,000 after 1000 registrations."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownTimer, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setModalOpen(true),
								className: "animate-pulse-glow mt-8 rounded-xl gradient-bg px-8 py-4 text-base font-bold text-primary-foreground shadow-xl",
								children: "Pay ₹119 & Register Now"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "relative z-10 border-t border-white/5 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 text-center text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" CodeSprint. All rights reserved. · Secure payments by Razorpay"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/95 p-3 backdrop-blur-xl sm:p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden min-w-0 flex-1 sm:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-[Sora] text-xl font-black gradient-text",
									children: "₹119"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground line-through",
									children: "₹8,000"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-2 flex items-center gap-1 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
										" Only ",
										seatsLeft,
										" seats left"
									]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setModalOpen(true),
						className: "animate-pulse-glow flex flex-1 items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg sm:flex-none sm:px-8",
						children: ["Pay ₹119 & Register Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterModal, {
				open: modalOpen,
				onClose: () => setModalOpen(false)
			})
		]
	});
}
//#endregion
export { Index as component };
