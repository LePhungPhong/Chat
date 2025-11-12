# ============================
# Stage 1: Build (TypeScript + Mediasoup worker)
# ============================
FROM node:20-slim AS builder

# Cài tool cần để build Mediasoup
RUN apt-get update && apt-get install -y \
    python3 python3-pip make g++ bash pkg-config libglib2.0-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy manifest và tsconfig để cache deps
COPY package*.json tsconfig.json ./

RUN npm ci

# Copy toàn bộ source code
COPY . .

# Prisma generate
RUN npx prisma generate

# Build TypeScript
RUN npm run build


# ============================
# Stage 2: Runtime (Node app)
# ============================
FROM node:20-slim AS runner

WORKDIR /app

RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
ENV PORT=4004
# ENV TZ=Asia/Ho_Chi_Minh   # nếu cần timezone

# Copy file cần thiết
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/generated ./dist/generated



EXPOSE 4004


CMD ["node", "dist/server.js"]
