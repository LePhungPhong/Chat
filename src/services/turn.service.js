"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTurnCredentials = buildTurnCredentials;
const crypto_1 = __importDefault(require("crypto"));
function buildTurnCredentials() {
    const MODE = process.env.TURN_MODE || (process.env.NODE_ENV === 'production' ? 'prod' : 'local');
    const SECRET = process.env.TURN_SECRET || 'DEV_SECRET_CHANGE_ME';
    const HOST = process.env.TURN_HOST || 'localhost';
    const REALM = process.env.TURN_REALM || 'local';
    const TTL = Number(process.env.TURN_TTL || 600);
    const username = Math.floor(Date.now() / 1000) + TTL;
    const hmac = crypto_1.default.createHmac('sha1', SECRET);
    hmac.update(String(username));
    const credential = hmac.digest('base64');
    const stun = { urls: ['stun:stun.l.google.com:19302'] };
    let iceServers = [];
    if (MODE === 'local') {
        iceServers = [
            { urls: ['turn:localhost:3478?transport=udp'], username: String(username), credential },
            stun
        ];
    }
    else if (process.env.TURN_HOST) {
        iceServers = [
            { urls: [`turn:${HOST}:3478?transport=udp`], username: String(username), credential },
            { urls: [`turn:${HOST}:443?transport=tcp`], username: String(username), credential },
            { urls: [`turns:${HOST}:5349?transport=tcp`], username: String(username), credential },
            stun
        ];
    }
    else {
        const ip = process.env.TURN_PUBLIC_IP;
        iceServers = [
            { urls: [`turn:${ip}:3478?transport=udp`], username: String(username), credential },
            stun
        ];
    }
    return { ttl: TTL, realm: REALM, mode: MODE, iceServers };
}
