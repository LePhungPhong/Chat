"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GlobalError;
const env_1 = require("../config/env");
// Hàm xử lý lỗi trong môi trường production
const sendErrorProd = (err, res) => {
    if (err.isOperational) {
        // Nếu lỗi là lỗi do người dùng (ví dụ: lỗi validation)
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
            errors: err.errors,
        });
    }
    else {
        // Nếu lỗi là do hệ thống (ví dụ: lỗi server)
        console.error(`ERROR 💥:`, err); // Log chi tiết lỗi
        return res.status(500).json({
            status: "error",
            message: "Something went very wrong!", // Thông báo lỗi chung cho người dùng
        });
    }
};
// Hàm xử lý lỗi trong môi trường development
const sendErrorDev = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status,
        error: err, // Log chi tiết lỗi
        message: err.message, // Thông báo lỗi
        stack: err.stack, // Log stack trace (dành cho developer)
    });
};
// Middleware xử lý lỗi toàn cục
function GlobalError(err, req, res, next) {
    err.statusCode = err.statusCode || 500; // Mặc định mã lỗi là 500 (server error) nếu không có mã lỗi
    err.status = err.status || "error"; // Mặc định trạng thái là "error" nếu không có
    // Kiểm tra môi trường để xác định cách xử lý lỗi
    if (env_1.env.nodeEnv === "development") {
        // Nếu là môi trường development, gửi chi tiết lỗi cho client
        sendErrorDev(err, res);
    }
    else if (env_1.env.nodeEnv === "production") {
        // Nếu là môi trường production, kiểm tra lỗi là ZodError hay không và gửi thông báo lỗi phù hợp
        let error = Object.assign(Object.assign({}, err), { message: err.message });
        sendErrorProd(error, res); // Gửi lỗi về client
    }
}
