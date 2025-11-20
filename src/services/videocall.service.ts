import { PrismaClient } from '../generated/prisma';
import crypto from "crypto";
import { getIO } from "./socket.service";

const prisma = new PrismaClient();

export const initiateCallService = async (conversationId: string, hostId: string, currentUserId: string) => {
    // 1. Check quyền: User có phải thành viên đoạn chat không?
    const member = await prisma.conversationMember.findUnique({
        where: { conversation_id_user_id: { conversation_id: conversationId, user_id: currentUserId } }
    });

    if (!member) {
        throw new Error("FORBIDDEN: Không có quyền tham gia cuộc gọi này");
    }

    // 2. Tìm phòng đang Active của đoạn chat này
    let room = await prisma.videoCallRoom.findFirst({
        where: {
            conversation_id: conversationId,
            status: "active"
        }
    });

    let isNewRoom = false;

    // 3. Nếu chưa có phòng active, tạo mới
    if (!room) {
        const roomCode = crypto.randomBytes(4).toString("hex");
        room = await prisma.videoCallRoom.create({
            data: {
                room_code: roomCode,
                host_id: currentUserId,
                conversation_id: conversationId,
                status: "active"
            }
        });
        isNewRoom = true;
    }

    // 4. Nếu là phòng mới, bắn thông báo cho cả nhóm qua Socket
    if (isNewRoom) {
        const io = getIO();
        if (io) {
            const user = await prisma.users.findUnique({ where: { id: currentUserId } });
            const callerName = user?.fullname || user?.username || "Ai đó";

            io.to(conversationId).emit("incoming-call", {
                conversationId,
                roomCode: room.room_code,
                callerName,
                callerId: currentUserId
            });
        }
    }

    return {
        success: true,
        roomCode: room.room_code,
        isNew: isNewRoom,
        room
    };
};

export const joinCallService = async (roomCode: string, userId: string) => {
    const room = await prisma.videoCallRoom.findUnique({ where: { room_code: roomCode } });

    if (!room || room.status !== 'active') {
        throw new Error("NOT_FOUND: Cuộc gọi đã kết thúc hoặc không tồn tại");
    }

    // Check membership
    const member = await prisma.conversationMember.findUnique({
        where: { conversation_id_user_id: { conversation_id: room.conversation_id, user_id: userId } }
    });

    if (!member) {
        throw new Error("FORBIDDEN: Không có quyền tham gia");
    }

    return { success: true, room };
};

export const getRoomInfoService = async (roomCode: string) => {
    const room = await prisma.videoCallRoom.findUnique({
        where: { room_code: roomCode },
        include: { host: { select: { fullname: true, username: true, avatarUrl: true } } }
    });

    if (!room) {
        throw new Error("NOT_FOUND: Room not found");
    }

    return room;
};