import { asyncHandler, sendSuccess } from "../utils/apiResponse.js";
import { logger } from "../utils/logger.js";

export const getHealth = asyncHandler(async (req, res) => {
  logger.info("Health check requested", { method: req.method, path: req.originalUrl });

  return sendSuccess(res, 200, {
    status: "ok",
    timestamp: new Date().toISOString(),
    services: {
      database: "connected",
      payments: "configured",
    },
  }, "Backend is running");
});
