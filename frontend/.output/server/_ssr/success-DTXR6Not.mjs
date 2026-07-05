import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/success-DTXR6Not.js
var $$splitComponentImporter = () => import("./success-CB6VfMfI.mjs");
var paymentSuccessSearchSchema = objectType({
	order_id: stringType().trim().min(1).optional(),
	payment_id: stringType().trim().min(1).optional(),
	amount: stringType().trim().min(1).optional(),
	name: stringType().trim().min(1).optional(),
	email: stringType().trim().min(1).optional(),
	phone: stringType().trim().min(1).optional()
});
var Route = createFileRoute("/payment/success")({
	validateSearch: (search) => paymentSuccessSearchSchema.parse(search),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
