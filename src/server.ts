import http from "http";
import app from "./app";
import { prisma } from "./config/database";
import { initSocket } from "./services/socket.service";
import { Server } from 'socket.io'


const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await prisma.$connect();
    console.log("✅ Đã kết nối cơ sở dữ liệu PostgreSQL");

    const server = http.createServer(app);

    await initSocket(server);

    server.listen(PORT, () => {
      console.log(`🚀 Server chạy tại: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Lỗi khởi động server:", error);
    process.exit(1);
  }
}

startServer();
