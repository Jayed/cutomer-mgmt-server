"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res) => {
    const statusCode = err.statusCode || 500; // Include statusCode if available
    const message = err.message || 'Something went wrong!';
    res.status(statusCode).json({
        success: false,
        message,
        error: err,
    });
};
exports.default = globalErrorHandler;
