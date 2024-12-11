const { INTERNAL_SERVER_ERROR } = require("../utils/statusCode.js");


const errorHandle = (error, req, res, next) => {
  const status = "FAILED";
  const statusCode = error.statusCode || INTERNAL_SERVER_ERROR;
  const message = error.message || "An unexpected error occurred";
  const details = error.details || null;

  res.status(statusCode).json({
    status,
    statusCode,
    message,
    details,
    timestamp: new Date().toISOString(),
  });
};

module.exports = errorHandle;

