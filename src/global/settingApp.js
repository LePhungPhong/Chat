"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL_API_V1 = exports.limiter = exports.corsOptions = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
exports.corsOptions = {
    origin: "*", // Định nghĩa các nguồn gốc được phép
    methods: "GET,POST,PUT,PATCH,DELETE", // Các phương thức HTTP được phép
    allowedHeaders: "*", // Các header được phép
    credentials: true, // Cho phép cookies đi kèm với các yêu cầu CORS
    preflightContinue: false, // Không tiếp tục gửi yêu cầu OPTIONS sau khi preflight
    optionsSuccessStatus: 204, // Mã trạng thái trả về cho preflight request thành công
};
exports.limiter = (0, express_rate_limit_1.default)({
    limit: 100, // Giới hạn số lượng yêu cầu
    windowMs: 15 * 60 * 1000, // Thời gian giới hạn trong 15 phút
    message: "Too many requests form this IP, please try again in an hour!", // Thông báo khi vượt quá giới hạn
});
exports.URL_API_V1 = "/api/v1";
