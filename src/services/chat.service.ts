import { PrismaClient, MessageType } from "../generated/prisma";
import { getIO } from "./socket.service";

const prisma = new PrismaClient();

// ============================================================
// Hàm thông báo Sidebar chuẩn xác logic joined_at
// ============================================================
const notifySidebar = async (conversationId: string) => {
  try {
    const io = getIO();
    if (!io) return;

    // 1. Lấy tin nhắn cuối cùng (hiển thị preview)
    const last = await prisma.message.findFirst({
      where: { conversation_id: conversationId },
      orderBy: { created_at: "desc" },
      select: { message: true, created_at: true, status: true },
    });

    const lastMessage = last
      ? last.status === "recall"
        ? "Tin nhắn đã thu hồi"
        : last.status === "delete"
          ? "Tin nhắn đã xóa"
          : last.message
      : "";

    const lastMessageAt = last
      ? (last.created_at as unknown as Date).toISOString()
      : new Date().toISOString();

    // 2. Lấy danh sách thành viên để tính badge riêng cho từng người
    const members = await prisma.conversationMember.findMany({
      where: { conversation_id: conversationId },
      select: { user_id: true, joined_at: true }, // <--- BẮT BUỘC có joined_at
    });

    // 3. Loop từng người để tính số tin chưa đọc của riêng họ
    for (const m of members) {
      // Mốc thời gian user này bắt đầu thấy tin nhắn (do xóa lịch sử hoặc mới vào nhóm)
      const joinedAt = m.joined_at ? new Date(m.joined_at) : new Date(0);

      const unreadCount = await prisma.readReceipt.count({
        where: {
          user_id: m.user_id,
          read_at: null, // Chưa đọc
          message: {
            conversation_id: conversationId,
            sender_id: { not: m.user_id }, // Không đếm tin mình gửi
            //  Không đếm tin đã xóa HOẶC thu hồi
            status: { notIn: ["delete", "recall"] },
            //  Chỉ đếm tin nhắn mới hơn thời điểm join/reset
            created_at: { gte: joinedAt },
          },
        },
      });

      io.to(`user:${m.user_id}`).emit("conversation-updated", {
        conversationId,
        lastMessage,
        lastMessageAt,
        unreadCount,
      });
    }
  } catch (e) {
    console.error("Notify error:", e);
  }
};


export async function sendMessage(
  conversationId: string,
  senderId: string,
  message: string,
  messageType: MessageType = "text",
  replyToId?: string
) {
  const msg = await prisma.message.create({
    data: {
      conversation_id: conversationId,
      sender_id: senderId,
      message,
      message_type: messageType,
      status: "show",
      replyToId: replyToId || null,
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  // Update created_at của conversation để nó nhảy lên đầu list
  await prisma.conversation.update({
    where: { id: conversationId },
    data: { created_at: new Date() },
  });

  const members = await prisma.conversationMember.findMany({
    where: { conversation_id: conversationId },
    select: { user_id: true },
  });

  // Tạo ReadReceipt cho tất cả thành viên
  const receipts = members.map((m) => ({
    message_id: msg.id,
    user_id: m.user_id,
    read_at: m.user_id === senderId ? new Date() : null,
  }));

  await prisma.readReceipt.createMany({ data: receipts });

  const fullMsg = await prisma.message.findUnique({
    where: { id: msg.id },
    include: {
      sender: {
        select: {
          id: true,
          fullname: true,
          username: true,
          avatarUrl: true,
        },
      },
      replyTo: {
        select: {
          id: true,
          message: true,
          sender: { select: { fullname: true } },
        },
      },
      readReceipts: true,
      attachments: true,
    },
  });

  const io = getIO();
  if (io && fullMsg) {
    io.to(conversationId).emit("new-message", {
      ...fullMsg,
      createdAt: fullMsg.created_at,
    });
    // Gọi notify để cập nhật Sidebar
    await notifySidebar(conversationId);
  }

  return fullMsg;
}

export async function deleteMessage(id: string, userId: string) {
  const existing = await prisma.message.findUnique({ where: { id } });
  if (!existing || existing.sender_id !== userId)
    throw new Error("Unauthorized");

  const msg = await prisma.message.update({
    where: { id },
    data: { status: "recall" },
  });

  const io = getIO();
  if (io) {
    io.to(msg.conversation_id).emit("message-updated", {
      id: msg.id,
      conversationId: msg.conversation_id,
      status: "recall",
      message: "Tin nhắn đã thu hồi",
    });
    await notifySidebar(msg.conversation_id);
  }
  return msg;
}

// ============================================================
// [CORE FIX] Lọc list chat theo joined_at
// ============================================================
export async function getUserConversations(userId: string) {
  const list = await prisma.conversation.findMany({
    where: { members: { some: { user_id: userId } } },
    include: {
      members: {
        include: {
          user: {
            select: {
              id: true,
              fullname: true,
              username: true,
              avatarUrl: true,
              is_online: true,
              last_seen: true,
            },
          },
        },
      },
      messages: {
        where: { status: { not: "delete" } },
        orderBy: { created_at: "desc" },
        take: 1,
      },
    },
    orderBy: { created_at: "desc" },
  });

  // Xử lý logic ẩn chat đã xóa + đếm unread
  const processed = await Promise.all(
    list.map(async (c) => {
      const me = c.members.find((m) => m.user_id === userId);
      const joinedAt = me?.joined_at ? new Date(me.joined_at) : new Date(0);

      const last = c.messages[0];

      // Nếu tin nhắn cuối cùng CŨ HƠN thời điểm xóa chat -> Ẩn cuộc trò chuyện này
      if (last && new Date(last.created_at) < joinedAt) {
        return null;
      }

      const unread = await prisma.readReceipt.count({
        where: {
          user_id: userId,
          read_at: null,
          message: {
            conversation_id: c.id,
            status: { notIn: ["delete", "recall"] }, // Không đếm tin thu hồi
            created_at: { gte: joinedAt }, // Chỉ đếm tin mới
          },
        },
      });

      return {
        ...c,
        last_message:
          last?.status === "recall"
            ? "Tin nhắn đã thu hồi"
            : last?.message || "",
        last_message_at: last?.created_at || c.created_at,
        unread_count: unread,
      };
    })
  );

  return processed.filter(Boolean);
}

export async function getMessages(
  conversationId: string,
  userId: string, // Cần userId để biết mốc thời gian
  cursor?: string,
  limit = 30
) {
  const member = await prisma.conversationMember.findUnique({
    where: {
      conversation_id_user_id: {
        conversation_id: conversationId,
        user_id: userId,
      },
    },
  });

  if (!member) return [];

  const cutoffDate = member.joined_at
    ? new Date(member.joined_at)
    : new Date(0);

  const where: any = {
    conversation_id: conversationId,
    status: { not: "delete" },
    created_at: { gte: cutoffDate }, // Chỉ lấy tin nhắn SAU khi join/reset
  };

  if (cursor) {
    where.created_at = { ...where.created_at, lt: new Date(cursor) };
  }

  const rows = await prisma.message.findMany({
    where,
    orderBy: { created_at: "desc" },
    take: limit,
    include: {
      sender: true,
      replyTo: { include: { sender: true } },
      readReceipts: true,
      attachments: true,
    },
  });

  return rows.reverse();
}

// ============================================================
// Soft Delete: Reset joined_at thành NOW
// ============================================================
export async function softDeleteConversation(
  conversationId: string,
  userId: string
) {
  await prisma.conversationMember.update({
    where: {
      conversation_id_user_id: {
        conversation_id: conversationId,
        user_id: userId,
      },
    },
    data: {
      joined_at: new Date(),
    },
  });

  const io = getIO();
  if (io) {
    io.to(`user:${userId}`).emit("conversation-removed", { conversationId });
  }

  return { success: true };
}

// ... (Giữ nguyên createGroupConversation, ensureRoom, setRead, addAttachment, editMessage, searchMessages, setTyping, addMembers, removeMember, leaveGroup, transferOwnership, disbandGroup)
export async function createGroupConversation(
  name: string,
  createdBy: string,
  memberIds: string[]
) {
  const uniqueIds = Array.from(new Set(memberIds));
  const newGroup = await prisma.conversation.create({
    data: {
      is_group: true,
      name,
      created_by: createdBy,
      created_at: new Date(),
      members: {
        create: uniqueIds.map((id) => ({
          user_id: id,
          role: id === createdBy ? "admin" : "member",
        })),
      },
    },
    include: { members: { include: { user: true } } },
  });
  const io = getIO();
  if (io) {
    const fullRoom = await prisma.conversation.findUnique({
      where: { id: newGroup.id },
      include: { members: { include: { user: true } }, messages: { take: 1 } },
    });
    if (fullRoom) {
      uniqueIds.forEach((uid) =>
        io.to(`user:${uid}`).emit("new-conversation", fullRoom)
      );
    }
  }
  return newGroup;
}
export async function ensureRoom(userAId: string, userBId: string) {
  const conversation = await prisma.conversation.findFirst({
    where: {
      is_group: false,
      AND: [
        { members: { some: { user_id: userAId } } },
        { members: { some: { user_id: userBId } } },
      ],
    },
    include: { members: { include: { user: true } } },
  });
  if (conversation) return conversation;
  const newRoom = await prisma.conversation.create({
    data: {
      is_group: false,
      created_by: userAId,
      created_at: new Date(),
      members: {
        create: [
          { user_id: userAId, role: "member" },
          { user_id: userBId, role: "member" },
        ],
      },
    },
    include: { members: { include: { user: true } } },
  });
  const io = getIO();
  if (io) {
    const fullRoom = await prisma.conversation.findUnique({
      where: { id: newRoom.id },
      include: { members: { include: { user: true } }, messages: { take: 1 } },
    });
    if (fullRoom) {
      [userAId, userBId].forEach((uid) =>
        io.to(`user:${uid}`).emit("new-conversation", fullRoom)
      );
    }
  }
  return newRoom;
}
export async function setRead(messageId: string, userId: string) {
  await prisma.readReceipt.updateMany({
    where: { message_id: messageId, user_id: userId },
    data: { read_at: new Date() },
  });
}
export async function markAllAsRead(conversationId: string, userId: string) {
  await prisma.readReceipt.updateMany({
    where: {
      user_id: userId,
      read_at: null,
      message: { conversation_id: conversationId, status: { not: "delete" } },
    },
    data: { read_at: new Date() },
  });
  const io = getIO();
  if (io) {
    io.to(`user:${userId}`).emit("conversation-updated-unread", {
      conversationId,
      unreadCount: 0,
    });
  }
  return { success: true };
}
export async function addAttachment(mId: string, url: string, type: any) {
  return prisma.attachment.create({
    data: { message_id: mId, file_url: url, file_type: type },
  });
}
export async function editMessage(id: string, uid: string, text: string) {
  const m = await prisma.message.findUnique({ where: { id } });
  if (m?.sender_id !== uid) throw new Error("Unauthorized");
  return prisma.message.update({ where: { id }, data: { message: text } });
}
export async function searchMessages(cid: string, q: string) {
  return prisma.message.findMany({
    where: {
      conversation_id: cid,
      message: { contains: q, mode: "insensitive" },
      status: "show",
    },
  });
}
export async function setTyping(cid: string, uid: string, typing: boolean) {
  return prisma.typingStatus.upsert({
    where: { conversation_id_user_id: { conversation_id: cid, user_id: uid } },
    create: { conversation_id: cid, user_id: uid, is_typing: typing },
    update: { is_typing: typing },
  });
}
export async function addMembers(cid: string, ids: string[]) {
  // 1. Thêm vào DB với joined_at = NOW
  await prisma.conversationMember.createMany({
    data: ids.map(id => ({ conversation_id: cid, user_id: id, joined_at: new Date() })),
    skipDuplicates: true
  });

  const io = getIO();
  if (io) {
    // 2. Báo cho thành viên CŨ (để update list member bên phải)
    const newMembers = await prisma.users.findMany({
      where: { id: { in: ids } },
      select: { id: true, fullname: true, username: true, avatarUrl: true, is_online: true, last_seen: true }
    });
    io.to(cid).emit("members-added", { conversationId: cid, members: newMembers });

    // 3. Báo cho thành viên MỚI (để hiện nhóm bên trái)
    const fullConversation = await prisma.conversation.findUnique({
      where: { id: cid },
      include: {
        members: {
          include: { user: { select: { id: true, fullname: true, username: true, avatarUrl: true, is_online: true, last_seen: true } } }
        },
        // Vẫn lấy tin nhắn để đảm bảo cấu trúc, nhưng sẽ override bên dưới
        messages: { take: 1, orderBy: { created_at: "desc" } }
      }
    });

    if (fullConversation) {
      // [QUAN TRỌNG] Ghi đè last_message thành rỗng để người mới thấy "Chưa có tin nhắn"
      const payloadForNewMember = {
        ...fullConversation,
        last_message: "", // <--- Hiển thị rỗng
        last_message_at: new Date(), // Thời gian hiện tại
        unread_count: 0
      };

      ids.forEach(uid => {
        io.to(`user:${uid}`).emit("new-conversation", payloadForNewMember);
      });
    }

    // 4. Gửi tin nhắn hệ thống (Optional)
    const names = newMembers.map(u => u.fullname || u.username).join(", ");
    io.to(cid).emit("new-message", {
      id: Math.random().toString(),
      conversation_id: cid,
      sender_id: "system",
      message: `${names} đã được thêm vào nhóm.`,
      message_type: "text",
      created_at: new Date(),
      status: "sent"
    });
  }
  return { success: true };
}
export async function removeMember(cid: string, uid: string) {
  // 1. Lấy thông tin user trước khi xóa để có Tên hiển thị
  const user = await prisma.users.findUnique({
    where: { id: uid },
    select: { fullname: true, username: true }
  });
  const name = user?.fullname || user?.username || "Thành viên";

  // 2. Xóa thành viên khỏi nhóm trong DB
  await prisma.conversationMember.deleteMany({
    where: { conversation_id: cid, user_id: uid }
  });

  // 3. Lưu tin nhắn hệ thống vào DB
  const systemMsg = await prisma.message.create({
    data: {
      conversation_id: cid,
      sender_id: uid,
      message: `${name} đã bị mời ra khỏi nhóm.`,
      status: "sent",
      message_type: "text",
      created_at: new Date()
    }
  });

  const io = getIO();
  if (io) {
    // Event A: Báo cho người bị kick (để xóa Sidebar của họ ngay lập tức)
    io.to(`user:${uid}`).emit("conversation-removed", { conversationId: cid });

    // Event B: Báo cho nhóm (để cập nhật danh sách thành viên bên phải)
    io.to(cid).emit("member-removed", { conversationId: cid, userId: uid });

    // Event C: Báo tin nhắn mới cho nhóm (để hiển thị dòng thông báo)
    io.to(cid).emit("new-message", {
      ...systemMsg,
      sender: {
        id: uid,
        username: "System",
        fullname: "Thông báo",
        avatarUrl: ""
      }
    });
  }

  return { success: true };
}
export async function leaveGroup(cid: string, uid: string) {
  await prisma.conversationMember.deleteMany({
    where: { conversation_id: cid, user_id: uid },
  });
  const io = getIO();
  if (io) {
    io.to(cid).emit("member-left", { conversationId: cid, userId: uid });
  }
  return { success: true };
}
export async function transferOwnership(
  cid: string,
  currentAdminId: string,
  newAdminId: string
) {
  const conv = await prisma.conversation.findUnique({
    where: { id: cid },
    include: { members: true },
  });
  const isAdmin =
    conv?.members.find((m) => m.user_id === currentAdminId)?.role === "admin";
  if (!isAdmin) throw new Error("Bạn không phải quản trị viên");
  await prisma.$transaction([
    prisma.conversationMember.updateMany({
      where: { conversation_id: cid, user_id: currentAdminId },
      data: { role: "member" },
    }),
    prisma.conversationMember.updateMany({
      where: { conversation_id: cid, user_id: newAdminId },
      data: { role: "admin" },
    }),
    prisma.conversation.update({
      where: { id: cid },
      data: { created_by: newAdminId },
    }),
  ]);
  const io = getIO();
  if (io) {
    io.to(cid).emit("conversation-updated", {
      conversationId: cid,
      event: "role-change",
      newOwnerId: newAdminId,
    });
    io.to(cid).emit("new-message", {
      id: Math.random().toString(),
      conversation_id: cid,
      sender_id: "system",
      message: "Quyền quản trị viên đã được chuyển.",
      message_type: "text",
      created_at: new Date(),
      status: "sent",
    });
  }
  return { success: true };
}
export async function disbandGroup(cid: string, adminId: string) {
  const member = await prisma.conversationMember.findUnique({
    where: { conversation_id_user_id: { conversation_id: cid, user_id: adminId } }
  });
  if (member?.role !== 'admin') throw new Error("Unauthorized");

  const io = getIO();
  if (io) {
    io.to(cid).emit("conversation-removed", { conversationId: cid });
  }

  // Xóa ReadReceipts trước
  const messages = await prisma.message.findMany({ where: { conversation_id: cid }, select: { id: true } });
  const messageIds = messages.map(m => m.id);

  if (messageIds.length > 0) {
    await prisma.readReceipt.deleteMany({ where: { message_id: { in: messageIds } } });
    await prisma.attachment.deleteMany({ where: { message_id: { in: messageIds } } });
  }

  // Sau đó mới xóa Conversation (Prisma sẽ cascade members và messages)
  await prisma.conversation.delete({ where: { id: cid } });

  return { success: true };
}
export async function renameGroup(conversationId: string, userId: string, newName: string) {
  // 1. Kiểm tra quyền admin
  const member = await prisma.conversationMember.findUnique({
    where: {
      conversation_id_user_id: {
        conversation_id: conversationId,
        user_id: userId,
      },
    },
  });

  if (member?.role !== 'admin') {
    throw new Error("UNAUTHORIZED: Chỉ quản trị viên mới có thể đổi tên nhóm.");
  }

  // 2. Update DB
  const updatedConv = await prisma.conversation.update({
    where: { id: conversationId },
    data: { name: newName }
  });

  // 3. Gửi thông báo và Socket
  const io = getIO();
  if (io) {
    const user = await prisma.users.findUnique({ where: { id: userId } });
    const userName = user?.fullname || user?.username || "Admin";
    const message = `${userName} đã đổi tên nhóm thành "${newName}".`;

    // Tạo tin nhắn hệ thống
    const systemMsg = await prisma.message.create({
      data: {
        conversation_id: conversationId,
        sender_id: userId,
        message: message,
        status: "show",
        message_type: "text",
        created_at: new Date()
      },
      include: {
        sender: {
          select: { id: true, fullname: true, username: true, avatarUrl: true }
        }
      }
    });

    // Event A: Báo tin nhắn mới cho nhóm
    io.to(conversationId).emit("new-message", {
      ...systemMsg,
      createdAt: systemMsg.created_at,
    });

    // Event B1: Báo cho tất cả client ĐANG ở trong phòng hội thoại
    io.to(conversationId).emit("conversation-updated", {
      conversationId,
      newName,
      lastMessage: message,
      lastMessageAt: systemMsg.created_at,
    });

    // vent B2: Báo cho tất cả user (Sidebar) qua room `user:{id}`
    const members = await prisma.conversationMember.findMany({
      where: { conversation_id: conversationId },
      select: { user_id: true },
    });

    for (const m of members) {
      io.to(`user:${m.user_id}`).emit("conversation-updated", {
        conversationId,
        newName,
        lastMessage: message,
        lastMessageAt: systemMsg.created_at,
        // không gửi unreadCount → Aside giữ nguyên unread cũ,
        // rename không bị tính là "tin nhắn chưa đọc"
      });
    }
  }

  return updatedConv;
}
