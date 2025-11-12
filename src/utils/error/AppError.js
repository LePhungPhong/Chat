"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Lớp AppError tùy chỉnh để xử lý lỗi trong ứng dụng
class AppError extends Error {
    constructor(message, statusCode, errors) {
        super(message); // Gọi constructor của Error để tạo thông điệp lỗi
        // Gán mã trạng thái và xác định trạng thái lỗi (fail cho 4xx, error cho các mã còn lại)
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational = true; // Đánh dấu đây là lỗi có thể xử lý
        this.errors = errors;
        // Captures stack trace để dễ dàng gỡ lỗi
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = AppError;
