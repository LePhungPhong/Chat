"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const socket_service_1 = require("./services/socket.service");
const PORT = process.env.PORT || 3001;
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.prisma.$connect();
            console.log("✅ Đã kết nối cơ sở dữ liệu PostgreSQL");
            const server = http_1.default.createServer(app_1.default);
            yield (0, socket_service_1.initSocket)(server);
            server.listen(PORT, () => {
                console.log(`🚀 Server chạy tại: http://localhost:${PORT}`);
            });
        }
        catch (error) {
            console.error("❌ Lỗi khởi động server:", error);
            process.exit(1);
        }
    });
}
startServer();
