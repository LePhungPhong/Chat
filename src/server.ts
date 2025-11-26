import http from "http";
import app from "./app";
import { prisma } from "./config/database";
import { initSocket } from "./services/socket.service";
import { startAllListeners } from "./services/listen.service";

const PORT = process.env.PORT || 4004;

async function startServer() {
  try {
    await prisma.$connect();
    console.log("✅ Đã kết nối cơ sở dữ liệu PostgreSQL");

    const server = http.createServer(app);

    const io = await initSocket(server);

    app.set("io", io);

    server.listen(PORT, async () => {
      await startAllListeners();
      console.log(`🚀 Server chạy tại: https://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Lỗi khởi động server:", error);
    process.exit(1);
  }
}

startServer();
