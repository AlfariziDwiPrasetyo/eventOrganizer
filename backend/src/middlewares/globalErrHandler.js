const globalErrHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";
  const message = err.message;
  const stack = err.stack;
  res.status(statusCode).json({
    status,
    message,
    stack,
  });
};

module.exports = globalErrHandler;
