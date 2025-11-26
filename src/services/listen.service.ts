import { prisma } from "../config/database";
import { getNatsClient, jc } from "../config/nats";

// Lắng nghe cập nhật hồ sơ
export async function listenProfileUpdated() {
  const nc = await getNatsClient();
  const sub = nc.subscribe("profile.updated");
  console.log("👂 Listening to event: profile.updated");

  for await (const msg of sub) {
    try {
      const data: any = jc.decode(msg.data);
      console.log("📩 Received event: profile.updated", data);

      const fullname = [data.lastname, data.firstname]
        .filter(Boolean)
        .join(" ")
        .trim();

      await prisma.users.upsert({
        where: { id: data.user_id },
        update: { fullname, username: data.username, avatarUrl: data.avatar },
        create: {
          id: data.user_id,
          fullname,
          username: data.username,
          avatarUrl: data.avatar,
        },
      });

      console.log(`✅ Profile upserted for user_id: ${data.user_id}`);
    } catch (err) {
      console.error("❌ Error handling profile.updated:", err);
    }
  }
}

// Lắng nghe xoá hồ sơ
export async function listenProfileDeleted() {
  const nc = await getNatsClient();
  const sub = nc.subscribe("profile.deleted");
  console.log("👂 Listening to event: profile.deleted");

  for await (const msg of sub) {
    try {
      const data: any = jc.decode(msg.data);
      console.log("📩 Received event: profile.deleted", data);

      await prisma.users
        .delete({
          where: { id: data.user_id },
        })
        .catch(() => null); // nếu user không tồn tại thì bỏ qua

      console.log(`🗑️ Profile deleted for user_id: ${data.user_id}`);
    } catch (err) {
      console.error("❌ Error handling profile.deleted:", err);
    }
  }
}

// Khởi động tất cả listener
export async function startAllListeners() {
  listenProfileUpdated().catch((err) =>
    console.error("Listener profile.updated error:", err)
  );
  listenProfileDeleted().catch((err) =>
    console.error("Listener profile.deleted error:", err)
  );
}
