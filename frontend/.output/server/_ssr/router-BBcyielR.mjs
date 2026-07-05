import { a as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { n as objectType, r as stringType, t as numberType } from "../_libs/zod.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BBcyielR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BIVZQsla.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CodeSprint — SQL, Python DSA & Full-Stack Mastery for ₹119" },
			{
				name: "description",
				content: "Launch offer: get 3 premium courses — SQL for Analytics, Data Structures with Python, and Complete DSA + Web Dev — for just ₹119. First 1000 students only."
			},
			{
				name: "author",
				content: "CodeSprint"
			},
			{
				property: "og:title",
				content: "CodeSprint — 3 Premium Courses for ₹119"
			},
			{
				property: "og:description",
				content: "SQL, Python DSA & Full-Stack Web Dev. Launch offer ₹119 (was ₹8000). First 1000 seats only."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap"
			}
		],
		scripts: [{
			src: "https://checkout.razorpay.com/v1/checkout.js",
			async: true
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$1 = () => import("./routes-B2CCUz7-.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./success-Bwh7WhBB.mjs");
var Route$3 = createFileRoute("/payment/success")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var schema$2 = objectType({
	order_id: stringType().trim().min(1).optional(),
	payment_id: stringType().trim().min(1).optional(),
	signature: stringType().trim().min(1).optional(),
	razorpay_order_id: stringType().trim().min(1).optional(),
	razorpay_payment_id: stringType().trim().min(1).optional(),
	razorpay_signature: stringType().trim().min(1).optional()
});
var Route$2 = createFileRoute("/api/verify-payment")({ server: { handlers: {
	OPTIONS: async () => {
		return new Response(null, {
			status: 204,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "POST, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type, Authorization"
			}
		});
	},
	POST: async ({ request }) => {
		try {
			const body = await request.json();
			const parsed = schema$2.safeParse(body);
			if (!parsed.success) return new Response(JSON.stringify({
				error: "Invalid input",
				details: parsed.error.flatten()
			}), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			const backendUrl = processModule.env.BACKEND_URL || "http://localhost:5000";
			const response = await fetch(`${backendUrl}/api/verify-payment`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(parsed.data)
			});
			const text = await response.text();
			let data = null;
			if (text) try {
				data = JSON.parse(text);
			} catch {
				data = null;
			}
			if (!response.ok) return new Response(JSON.stringify({ error: data?.message || data?.error || `Failed to verify payment (${response.status})` }), {
				status: response.status,
				headers: { "Content-Type": "application/json" }
			});
			return new Response(JSON.stringify(data || { success: true }), {
				status: 200,
				headers: { "Content-Type": "application/json" }
			});
		} catch (err) {
			return new Response(JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
	}
} } });
var schema$1 = objectType({
	name: stringType().trim().min(2).max(80),
	email: stringType().trim().email().max(160),
	phone: stringType().trim().min(7).max(20),
	amount: numberType().int().min(100).optional(),
	currency: stringType().trim().max(10).optional(),
	receipt: stringType().trim().max(40).optional()
});
var Route$1 = createFileRoute("/api/create-order")({ server: { handlers: {
	OPTIONS: async () => {
		return new Response(null, {
			status: 204,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "POST, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type, Authorization"
			}
		});
	},
	POST: async ({ request }) => {
		try {
			const body = await request.json();
			const parsed = schema$1.safeParse(body);
			if (!parsed.success) return new Response(JSON.stringify({
				error: "Invalid input",
				details: parsed.error.flatten()
			}), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			const backendUrl = processModule.env.BACKEND_URL || "http://localhost:5000";
			const response = await fetch(`${backendUrl}/api/create-order`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(parsed.data)
			});
			const text = await response.text();
			let data = null;
			if (text) try {
				data = JSON.parse(text);
			} catch {
				data = null;
			}
			if (!response.ok) return new Response(JSON.stringify({ error: data?.message || data?.error || `Failed to create payment link (${response.status})` }), {
				status: response.status,
				headers: { "Content-Type": "application/json" }
			});
			const paymentLinkData = data?.data || data;
			if (!paymentLinkData) return new Response(JSON.stringify({ error: "No payment data returned from backend" }), {
				status: 502,
				headers: { "Content-Type": "application/json" }
			});
			return new Response(JSON.stringify(paymentLinkData), {
				status: 200,
				headers: { "Content-Type": "application/json" }
			});
		} catch (err) {
			return new Response(JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
	}
} } });
var schema = objectType({
	paymentLinkId: stringType().trim().min(1),
	paymentId: stringType().trim().min(1),
	paymentLinkStatus: stringType().trim().optional(),
	paymentLinkReferenceId: stringType().trim().optional()
});
var Route = createFileRoute("/api/confirm-registration")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const body = await request.json();
		const parsed = schema.safeParse(body);
		if (!parsed.success) return new Response(JSON.stringify({
			error: "Invalid input",
			details: parsed.error.flatten()
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const backendUrl = processModule.env.BACKEND_URL;
		const response = await fetch(`${backendUrl}/api/confirm-registration`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(parsed.data)
		});
		const text = await response.text();
		let data = null;
		if (text) try {
			data = JSON.parse(text);
		} catch {
			data = { error: "Invalid backend response" };
		}
		return new Response(JSON.stringify(data), {
			status: response.status,
			headers: { "Content-Type": "application/json" }
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
} } } });
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var PaymentSuccessRoute = Route$3.update({
	id: "/payment/success",
	path: "/payment/success",
	getParentRoute: () => Route$5
});
var ApiVerifyPaymentRoute = Route$2.update({
	id: "/api/verify-payment",
	path: "/api/verify-payment",
	getParentRoute: () => Route$5
});
var ApiCreateOrderRoute = Route$1.update({
	id: "/api/create-order",
	path: "/api/create-order",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	ApiConfirmRegistrationRoute: Route.update({
		id: "/api/confirm-registration",
		path: "/api/confirm-registration",
		getParentRoute: () => Route$5
	}),
	ApiCreateOrderRoute,
	ApiVerifyPaymentRoute,
	PaymentSuccessRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
