// lib/natsClient.ts
import { connect, JSONCodec, NatsConnection } from "nats";
import { env } from "./env";

let nc: NatsConnection | null = null;
export const jc = JSONCodec();

export async function getNatsClient(): Promise<NatsConnection> {
  if (!nc) {
    nc = await connect({ servers: env.nats });
    console.log("🔗 Kết nối NATS thành công");
  }
  return nc;
}

export async function publish(subject: string, data: any) {
  const c = await getNatsClient();
  console.log({ subject, data });

  c.publish(subject, jc.encode(data));
}
