"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const settingApp_1 = require("./global/settingApp");
const GlobalError_1 = __importDefault(require("./middlewares/GlobalError"));
const AppError_1 = __importDefault(require("./utils/error/AppError"));
const httpStatusCode_1 = require("./response/httpStatusCode");
const videoCall_route_1 = __importDefault(require("./routes/videoCall.route"));
const chat_route_1 = __importDefault(require("./routes/chat.route"));
const turn_route_1 = __importDefault(require("./routes/turn.route"));
const app = (0, express_1.default)();
// ==============================
// Middleware cấu hình hệ thống
// ==============================
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)(settingApp_1.corsOptions));
app.use(settingApp_1.limiter);
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json({ limit: "10mb" }));
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});
// ==============================
// Cấu hình Content Security Policy (CSP)
// ==============================
app.use(helmet_1.default.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
            "'self'",
            "'unsafe-inline'",
            "https://cdn.socket.io",
            "https://cdn.skypack.dev",
            "https://esm.run",
            "https://cdn.jsdelivr.net",
            "https://esm.sh"
        ],
        styleSrc: ["'self'", "'unsafe-inline'"],
        connectSrc: [
            "'self'",
            "ws://localhost:3001",
            "wss://localhost:3001",
            "https://cdn.socket.io",
            "https://cdn.skypack.dev",
            "https://esm.run",
            "https://cdn.jsdelivr.net",
            "https://esm.sh"
        ],
        imgSrc: ["'self'", "data:"],
    },
}));
// ==============================
// Phục vụ file tĩnh (Public + Node Modules)
// ==============================
// app.use(
//   "/node_modules",
//   express.static(path.resolve(__dirname, "../node_modules"))
// );
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.get("/favicon.ico", (req, res) => {
    res.status(204).end();
});
// ==============================
// Khai báo route API
// ==============================
app.use(`${settingApp_1.URL_API_V1}/video`, videoCall_route_1.default);
app.use(`${settingApp_1.URL_API_V1}/chat`, chat_route_1.default);
app.use(`${settingApp_1.URL_API_V1}/turn`, turn_route_1.default);
// ==============================
// Xử lý route không tồn tại (404)
// ==============================
app.all(/.*/, (req, res, next) => {
    next(new AppError_1.default(`Không tìm thấy đường dẫn ${req.originalUrl} trên server`, httpStatusCode_1.HTTP_STATUS.NOT_FOUND));
});
// ==============================
// Middleware xử lý lỗi toàn cục
// ==============================
app.use(GlobalError_1.default);
exports.default = app;
