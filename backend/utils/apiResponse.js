export const sendSuccess = (res, statusCode = 200, data = {}, message = "Success") => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const sendError = (res, statusCode = 500, message = "Something went wrong") => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export const sendPaginatedSuccess = (res, statusCode = 200, data = [], message = "Success", pagination = {}) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    pagination,
  });
};

export const createError = (message, statusCode = 500) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
