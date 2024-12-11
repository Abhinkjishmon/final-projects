class ResponseHandler {
  static sendSuccess(res, statusCode, message, data = null) {
    return res.status(statusCode).json({
      status: "SUCCESS",
      statusCode,
      message,
      data,
    });
  }
}

module.exports = ResponseHandler;
