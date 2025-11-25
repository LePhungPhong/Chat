import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";
import { MediasoupService } from "./mediasoup.service";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();
let io: Server;

// Map lưu danh sách Producer trong từng phòng
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

  const updatePresence = async (uid: string, status: boolean) => {
    try {
      await prisma.users.updateMany({
        where: { id: uid },
        data: { is_online: status, last_seen: new Date() },
      });
    } catch (e) {
      console.error("Error updating presence:", e);
    }
  };

  io.on("connection", async (socket: Socket) => {
    const userId = String(socket.handshake.query.userId || "");

    if (!userId || userId === "undefined") {
      socket.disconnect(true);
      return;
    }

    socket.join(`user:${userId}`);
    await updatePresence(userId, true);
    io.emit("user-presence", {
      userId,
      isOnline: true,
      lastSeen: new Date().toISOString(),
    });

    socket.on("join-room", (roomId) => socket.join(roomId));
    socket.on("leave-room", (roomId) => socket.leave(roomId));
    socket.on("typing", (data) =>
      socket.to(data.conversationId).emit("typing", data)
    );

    socket.on("mark-read", async ({ conversationId, readerId, messageIds }) => {
      if (!Array.isArray(messageIds) || messageIds.length === 0) return;
      try {
        // [FIX] Update logic: chỉ đánh dấu tin nhắn KHÔNG phải của mình
        await prisma.readReceipt.updateMany({
          where: {
            message_id: { in: messageIds },
            user_id: readerId,
            message: {
              sender_id: { not: readerId },
            },
          },
          data: { read_at: new Date() },
        });

        // Báo cho client là đã update xong
        io.to(conversationId).emit("messages-read", {
          conversationId,
          readerId,
          messageIds,
          readAt: new Date().toISOString(),
        });

        // [FIX] Tính lại unread: Loại bỏ tin nhắn của chính mình
        const unreadCount = await prisma.readReceipt.count({
          where: {
            user_id: readerId,
            read_at: null,
            message: {
              conversation_id: conversationId,
              status: { not: "delete" },
              sender_id: { not: readerId }, // Quan trọng
            },
          },
        });
        io.to(`user:${readerId}`).emit("conversation-updated-unread", {
          conversationId,
          unreadCount,
        });
      } catch (e) {
        console.error(e);
      }
    });

    // --- VIDEO CALL EVENTS ---

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

    const handleLeaveVideoRoom = async () => {
      const roomCode = socket.data.videoRoomCode;
      const uid = socket.data.userId;
      if (!roomCode) return;

      const videoRoomId = `video:${roomCode}`;
      socket.leave(videoRoomId);

      const currentProducers = roomProducers.get(roomCode) || [];
      const remainingProducers = currentProducers.filter(
        (p) => p.userId !== uid
      );

      if (remainingProducers.length === 0) {
        roomProducers.delete(roomCode);
      } else {
        roomProducers.set(roomCode, remainingProducers);
        socket.to(videoRoomId).emit("peer-left", { userId: uid });
      }

      const sockets = await io.in(videoRoomId).fetchSockets();
      if (sockets.length === 0) {
        try {
          const room = await prisma.videoCallRoom.findFirst({
            where: { room_code: roomCode, status: "active" },
          });
          if (room) {
            await prisma.videoCallRoom.update({
              where: { id: room.id },
              data: { status: "ended", ended_at: new Date() },
            });
            io.to(room.conversation_id).emit("call-ended", {
              conversationId: room.conversation_id,
              roomCode,
            });
          }
        } catch (e) {
          console.error(e);
        }
      }
      socket.data.videoRoomCode = null;
    };

    socket.on("leave-video-room", handleLeaveVideoRoom);

    // ============================================================
    // MEDIASOUP SIGNALING
    // ============================================================

    const safeCb = (cb: any, data: any) => {
      if (typeof cb === "function") {
        cb(data);
      } else {
        console.warn("[Socket] Client did not provide a callback for event.");
      }
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
            const currentProducers = roomProducers.get(roomCode) || [];
            roomProducers.set(roomCode, [...currentProducers, producerInfo]);
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
      // No callback needed here usually
    });

    socket.on("disconnect", async () => {
      await handleLeaveVideoRoom();
      await updatePresence(userId, false);
      io.emit("user-presence", {
        userId,
        isOnline: false,
        lastSeen: new Date().toISOString(),
      });
    });
  });

  return io;
}
