const errorHandler = (err, req, res, next) => {
  console.log("errorHandler", err.stack);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Error interno";
  res.status(statusCode).json({ status: "error", statusCode, message });
};

module.exports = errorHandler;
