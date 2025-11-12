"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CatchAsync;
// Hàm CatchAsync giúp bắt lỗi trong các middleware bất đồng bộ
function CatchAsync(fn) {
    return (req, res, next) => {
        fn(req, res, next).catch(next); // Bắt lỗi và chuyển cho middleware xử lý lỗi
    };
}
