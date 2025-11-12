"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediasoupService = void 0;
const mediasoup_1 = require("mediasoup");
const events_1 = require("events");
class MediasoupService extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this.transports = new Map();
        this.producers = new Map();
        this.consumers = new Map();
        this.speakers = new Map();
        this.producerToTransport = new Map(); // Track producer -> transportId
        this.consumerToTransport = new Map(); // Track consumer -> transportId
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.worker = yield (0, mediasoup_1.createWorker)({ rtcMinPort: 40000, rtcMaxPort: 49999 });
            this.worker.on('died', () => {
                console.error('mediasoup worker died, exiting...');
                process.exit(1);
            });
            this.router = yield this.worker.createRouter({
                mediaCodecs: [
                    { kind: 'audio', mimeType: 'audio/opus', clockRate: 48000, channels: 2 },
                    { kind: 'video', mimeType: 'video/VP8', clockRate: 90000, parameters: { 'x-google-start-bitrate': 1000 } }
                ]
            });
        });
    }
    createTransport() {
        return __awaiter(this, void 0, void 0, function* () {
            const transport = yield this.router.createWebRtcTransport({
                listenIps: [{ ip: '0.0.0.0', announcedIp: process.env.PUBLIC_IP || '127.0.0.1' }],
                enableUdp: true,
                enableTcp: true,
                preferUdp: true
            });
            transport.on('dtlsstatechange', (state) => {
                if (state === 'closed') {
                    this.closeTransport(transport.id);
                }
            });
            this.transports.set(transport.id, transport);
            return transport;
        });
    }
    connectTransport(id, dtlsParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const transport = this.transports.get(id);
            if (!transport)
                throw new Error('Transport not found');
            yield transport.connect({ dtlsParameters });
        });
    }
    produce(transportId, kind, rtpParameters, appData) {
        return __awaiter(this, void 0, void 0, function* () {
            const transport = this.transports.get(transportId);
            if (!transport)
                throw new Error('Transport not found');
            let encodings = rtpParameters.encodings || (kind === 'video' ? [
                { maxBitrate: 500000 },
                { maxBitrate: 1000000 },
                { maxBitrate: 1500000 },
            ] : []);
            const producer = yield transport.produce({
                kind,
                rtpParameters: Object.assign(Object.assign({}, rtpParameters), { encodings }),
                appData,
            });
            this.producers.set(producer.id, producer);
            this.producerToTransport.set(producer.id, transportId); // Track association
            producer.on('transportclose', () => this.closeProducer(producer.id));
            if (kind === 'audio') {
                producer.on('score', (score) => {
                    var _a;
                    this.speakers.set(producer.id, ((_a = score[0]) === null || _a === void 0 ? void 0 : _a.score) || 0);
                    this.detectActiveSpeaker();
                });
            }
            return producer;
        });
    }
    consume(transportId, producerId, rtpCapabilities) {
        return __awaiter(this, void 0, void 0, function* () {
            const transport = this.transports.get(transportId);
            const producer = this.producers.get(producerId);
            if (!transport || !producer)
                throw new Error('Transport or producer not found');
            if (!this.router.canConsume({ producerId, rtpCapabilities }))
                throw new Error('Cannot consume');
            const consumer = yield transport.consume({
                producerId,
                rtpCapabilities,
                paused: false
            });
            this.consumers.set(consumer.id, consumer);
            this.consumerToTransport.set(consumer.id, transportId);
            consumer.on('transportclose', () => this.closeConsumer(consumer.id));
            return consumer;
        });
    }
    closeTransport(id) {
        const transport = this.transports.get(id);
        transport === null || transport === void 0 ? void 0 : transport.close();
        this.transports.delete(id);
        // Close associated producers/consumers via maps
        this.producers.forEach((_, pid) => {
            if (this.producerToTransport.get(pid) === id) {
                this.closeProducer(pid);
            }
        });
        this.consumers.forEach((_, cid) => {
            if (this.consumerToTransport.get(cid) === id) {
                this.closeConsumer(cid);
            }
        });
    }
    closeProducer(id) {
        const producer = this.producers.get(id);
        producer === null || producer === void 0 ? void 0 : producer.close();
        this.producers.delete(id);
        this.producerToTransport.delete(id); // Clean up map
        this.speakers.delete(id);
    }
    closeConsumer(id) {
        const consumer = this.consumers.get(id);
        consumer === null || consumer === void 0 ? void 0 : consumer.close();
        this.consumers.delete(id);
        this.consumerToTransport.delete(id);
    }
    getRtpCapabilities() {
        return this.router.rtpCapabilities;
    }
    detectActiveSpeaker() {
        const sorted = [...this.speakers.entries()].filter(([_, score]) => score > 5).sort((a, b) => b[1] - a[1]);
        const active = sorted.length > 0 ? sorted[0][0] : null;
        if (active)
            this.emit('activeSpeaker', active);
    }
    cleanupUser(transports, producers, consumers) {
        transports.forEach(id => this.closeTransport(id));
        producers.forEach(id => this.closeProducer(id));
        consumers.forEach(id => this.closeConsumer(id));
    }
}
exports.MediasoupService = MediasoupService;
