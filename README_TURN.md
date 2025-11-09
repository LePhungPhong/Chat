# TURN (coturn) integration

## 1) Prepare environment
Edit `.env.turn` at repo root:
```
TURN_HOST=turn.yourdomain.com
TURN_SECRET=CHANGE_THIS_LONG_RANDOM_SECRET
TURN_REALM=yourrealm.com
```
Place TLS certs under: `infra/turn/certs/live/<TURN_HOST>/fullchain.pem` and `privkey.pem`.

## 2) Run TURN server (host network recommended)
```
docker compose --env-file .env.turn -f docker/docker-compose.turn.host.yml up -d
# or if you cannot use host network:
docker compose --env-file .env.turn -f docker/docker-compose.turn.ports.yml up -d
```

## 3) Configure your app server
Ensure these env vars are set in your app server process:
```
TURN_HOST=turn.yourdomain.com
TURN_SECRET=CHANGE_THIS_LONG_RANDOM_SECRET
TURN_REALM=yourrealm.com
```
Your existing `/api/turn/credentials` route should return ephemeral HMAC credentials referencing TURN_HOST.

## 4) Client test
Open `public/tester.html` in a browser. In the header:
- Server: http://localhost:<your_backend_port>
- UserId: e.g., u1 (another tab u2)

Use **Group Call** and ensure `chrome://webrtc-internals` shows `relay` candidates when NAT traversal requires TURN.

## 5) Optional quotas (to avoid overload)
In `infra/turn/turnserver.conf`, uncomment and tune:
```
max-bps=8000000
total-quota=200
user-quota=10
```
