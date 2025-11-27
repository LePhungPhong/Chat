import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";
import { MediasoupService } from "./mediasoup.service";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();
let io: Server;

// Map lưu danh sách Producer trong từng phòng video
const roomProducers = new Map<
  string,
  { producerId: string; userId: string; kind: string }[]
>();

export const getIO = () => {
  if (!io) console.warn("[Socket] IO not ready!");
  return io;
};

export async function initSocket(server: HttpServer) {
  io = new Server(server, {
    path: "/socket.io",
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["X-User-Id"],
      credentials: true,
    },
  });

  const mediasoup = new MediasoupService();
  await mediasoup.init();

  // Helper cập nhật DB
  const updatePresence = async (uid: string, status: boolean) => {
    try {
      await prisma.users.updateMany({
        where: { id: uid },
        data: { is_online: status, last_seen: new Date() },
      });
    } catch (e) {
      console.error(`Error updating presence for ${uid}:`, e);
    }
  };

  io.on("connection", async (socket: Socket) => {
    const userId = String(socket.handshake.query.userId || "");

    // Validate User
    if (!userId || userId === "undefined") {
      console.log("[Socket] Invalid userId, disconnecting...");
      socket.disconnect(true);
      return;
    }

    // Room riêng quản lý connection của User này (để xử lý đa tab)
    const userRoom = `user:${userId}`;
    socket.join(userRoom);

    // ============================================================
    // 1. LOGIC ONLINE / PRESENCE (ĐÃ SỬA LỖI)
    // ============================================================

    // Bước 1: Cập nhật DB ngay lập tức
    await updatePresence(userId, true);
    const now = new Date().toISOString();

    // Bước 2: Báo cho NGƯỜI KHÁC biết user này vừa online
    // Dùng broadcast để không gửi ngược lại cho chính user này (tránh duplicate state ở FE)
    socket.broadcast.emit("user-presence", {
      userId,
      isOnline: true,
      lastSeen: now,
    });

    // Bước 3: Gửi danh sách online hiện có cho user vừa vào
    try {
      const onlineUsers = await prisma.users.findMany({
        where: { is_online: true },
        select: { id: true, last_seen: true },
      });

      socket.emit(
        "presence-init",
        onlineUsers.map((u: any) => ({
          userId: u.id,
          isOnline: true,
          lastSeen: u.last_seen,
        }))
      );
    } catch (e) {
      console.error("Error loading online users:", e);
    }

    // ============================================================
    // 2. LOGIC CHAT (MESSAGING)
    // ============================================================
    socket.on("join-room", (roomId) => socket.join(roomId));
    socket.on("leave-room", (roomId) => socket.leave(roomId));

    socket.on("typing", (data) =>
      socket.to(data.conversationId).emit("typing", data)
    );

    socket.on("mark-read", async ({ conversationId, readerId, messageIds }) => {
      if (!Array.isArray(messageIds) || messageIds.length === 0) return;
      try {
        // Chỉ đánh dấu tin nhắn của người khác gửi
        await prisma.readReceipt.updateMany({
          where: {
            message_id: { in: messageIds },
            user_id: readerId,
            message: { sender_id: { not: readerId } },
          },
          data: { read_at: new Date() },
        });

        io.to(conversationId).emit("messages-read", {
          conversationId,
          readerId,
          messageIds,
          readAt: new Date().toISOString(),
        });

        // Tính lại unread count
        const unreadCount = await prisma.readReceipt.count({
          where: {
            user_id: readerId,
            read_at: null,
            message: {
              conversation_id: conversationId,
              status: { not: "delete" },
              sender_id: { not: readerId },
            },
          },
        });

        io.to(`user:${readerId}`).emit("conversation-updated-unread", {
          conversationId,
          unreadCount,
        });
      } catch (e) {
        console.error("Mark read error:", e);
      }
    });

    // ============================================================
    // 3. LOGIC VIDEO CALL
    // ============================================================

    // Hàm xử lý rời phòng video (được dùng cả khi user chủ động rời và khi disconnect)
    const handleLeaveVideoRoom = async () => {
      const roomCode = socket.data.videoRoomCode as string | undefined;
      const uid = socket.data.userId as string | undefined;

      if (!roomCode) return;

      const videoRoomId = `video:${roomCode}`;
      socket.leave(videoRoomId);

      // Cập nhật danh sách producers trong RAM
      const currentProducers = roomProducers.get(roomCode) || [];
      const remainingProducers = currentProducers.filter(
        (p) => p.userId !== uid
      );

      if (remainingProducers.length === 0) {
        roomProducers.delete(roomCode);
      } else {
        roomProducers.set(roomCode, remainingProducers);
        // Báo cho những người còn lại trong phòng video
        socket.to(videoRoomId).emit("peer-left", { userId: uid });
      }

      // Kiểm tra xem phòng video còn ai không
      const socketsInVideo = await io.in(videoRoomId).fetchSockets();
      if (socketsInVideo.length === 0) {
        try {
          const room = await prisma.videoCallRoom.findFirst({
            where: { room_code: roomCode, status: "active" },
          });
          if (room) {
            await prisma.videoCallRoom.update({
              where: { id: room.id },
              data: { status: "ended", ended_at: new Date() },
            });
            // Báo cuộc gọi kết thúc cho conversation chat
            io.to(room.conversation_id).emit("call-ended", {
              conversationId: room.conversation_id,
              roomCode,
            });
          }
        } catch (e) {
          console.error("Error closing video room:", e);
        }
      }
      socket.data.videoRoomCode = null;
    };

    socket.on("join-video-room", async ({ roomCode, userId: uid }) => {
      const videoRoomId = `video:${roomCode}`;
      socket.join(videoRoomId);
      socket.data.videoRoomCode = roomCode;
      socket.data.userId = uid;

      const producers = roomProducers.get(roomCode) || [];
      if (producers.length > 0) {
        socket.emit("existing-producers", producers);
      }
    });

    socket.on("leave-video-room", handleLeaveVideoRoom);

    // --- MEDIASOUP SIGNALING ---
    const safeCb = (cb: any, data: any) => {
      if (typeof cb === "function") cb(data);
    };

    socket.on("get-rtp-capabilities", (cb) => {
      safeCb(cb, mediasoup.getRtpCapabilities());
    });

    socket.on("create-transport", async (_, cb) => {
      try {
        const t = await mediasoup.createTransport();
        safeCb(cb, {
          id: t.id,
          iceParameters: t.iceParameters,
          iceCandidates: t.iceCandidates,
          dtlsParameters: t.dtlsParameters,
        });
      } catch (e) {
        console.error("Create transport error:", e);
        safeCb(cb, { error: "Cannot create transport" });
      }
    });

    socket.on(
      "connect-transport",
      async ({ transportId, dtlsParameters }, cb) => {
        try {
          await mediasoup.connectTransport(transportId, dtlsParameters);
          safeCb(cb, "connected");
        } catch (e) {
          console.error("Connect transport error:", e);
          safeCb(cb, { error: "Connect failed" });
        }
      }
    );

    socket.on(
      "produce",
      async ({ transportId, kind, rtpParameters, appData }, cb) => {
        try {
          const p = await mediasoup.produce(
            transportId,
            kind,
            rtpParameters,
            appData
          );
          safeCb(cb, { id: p.id });

          const roomCode = socket.data.videoRoomCode;
          if (roomCode) {
            const producerInfo = {
              producerId: p.id,
              userId: socket.data.userId,
              kind: p.kind,
            };
            const current = roomProducers.get(roomCode) || [];
            roomProducers.set(roomCode, [...current, producerInfo]);
            socket.to(`video:${roomCode}`).emit("new-producer", producerInfo);
          }
        } catch (e) {
          console.error("Produce error:", e);
          safeCb(cb, { error: "Produce failed" });
        }
      }
    );

    socket.on(
      "consume",
      async ({ transportId, producerId, rtpCapabilities }, cb) => {
        try {
          const c = await mediasoup.consume(
            transportId,
            producerId,
            rtpCapabilities
          );
          safeCb(cb, {
            id: c.id,
            producerId,
            kind: c.kind,
            rtpParameters: c.rtpParameters,
          });
        } catch (e) {
          console.error("Consume error:", e);
          safeCb(cb, { error: "Consume failed" });
        }
      }
    );

    socket.on("resume-consumer", async ({ consumerId }) => {
      // Logic resume nếu cần thiết
    });

    // ============================================================
    // 4. DISCONNECT
    // ============================================================
    socket.on("disconnect", async () => {
      // 1. Xử lý rời video room trước
      await handleLeaveVideoRoom();
      const remainingSockets = await io.in(userRoom).fetchSockets();

      if (remainingSockets.length === 0) {
        // Chỉ khi KHÔNG còn socket nào kết nối thì mới tính là Offline
        await updatePresence(userId, false);

        io.emit("user-presence", {
          userId,
          isOnline: false,
          lastSeen: new Date().toISOString(),
        });
      } else {
      }
    });
  });

  return io;
}
