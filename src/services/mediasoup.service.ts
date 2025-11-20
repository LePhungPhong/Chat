import { types, createWorker } from 'mediasoup'
import { EventEmitter } from 'events'

export class MediasoupService extends EventEmitter {
  private worker!: types.Worker
  private router!: types.Router
  private transports: Map<string, types.Transport> = new Map()
  private producers: Map<string, types.Producer> = new Map()
  private consumers: Map<string, types.Consumer> = new Map()
  private speakers: Map<string, number> = new Map()
  private producerToTransport: Map<string, string> = new Map()  // Track producer -> transportId
  private consumerToTransport: Map<string, string> = new Map()  // Track consumer -> transportId

  async init() {
    this.worker = await createWorker({ rtcMinPort: 40000, rtcMaxPort: 49999 })
    this.worker.on('died', () => {
      console.error('mediasoup worker died, exiting...')
      process.exit(1)
    })
    this.router = await this.worker.createRouter({
      mediaCodecs: [
        { kind: 'audio', mimeType: 'audio/opus', clockRate: 48000, channels: 2 },
        { kind: 'video', mimeType: 'video/VP8', clockRate: 90000, parameters: { 'x-google-start-bitrate': 1000 } }
      ]
    })
  }

  async createTransport() {
    const transport = await this.router.createWebRtcTransport({
      listenIps: [{ ip: '0.0.0.0', announcedIp: process.env.PUBLIC_IP || '127.0.0.1' }],
      enableUdp: true,
      enableTcp: true,
      preferUdp: true
    })

    transport.on('dtlsstatechange', (state) => {
      if (state === 'closed') {
        this.closeTransport(transport.id)
      }
    })

    this.transports.set(transport.id, transport)
    return transport
  }

  async connectTransport(id: string, dtlsParameters: any) {
    const transport = this.transports.get(id)
    if (!transport) throw new Error('Transport not found')
    await transport.connect({ dtlsParameters })
  }

  async produce(transportId: string, kind: 'audio' | 'video', rtpParameters: any, appData?: any) {
    const transport = this.transports.get(transportId)
    if (!transport) throw new Error('Transport not found')


    let encodings = rtpParameters.encodings || (kind === 'video' ? [
      { maxBitrate: 500000 },
      { maxBitrate: 1000000 },
      { maxBitrate: 1500000 },
    ] : []);

    const producer = await transport.produce({
      kind,
      rtpParameters: { ...rtpParameters, encodings },
      appData,
    });

    this.producers.set(producer.id, producer)
    this.producerToTransport.set(producer.id, transportId)  // Track association
    producer.on('transportclose', () => this.closeProducer(producer.id))

    if (kind === 'audio') {
      producer.on('score', (score) => {
        this.speakers.set(producer.id, score[0]?.score || 0)
        this.detectActiveSpeaker()
      })
    }

    return producer
  }

  async consume(transportId: string, producerId: string, rtpCapabilities: any) {
    const transport = this.transports.get(transportId)
    const producer = this.producers.get(producerId)
    if (!transport || !producer) throw new Error('Transport or producer not found')

    if (!this.router.canConsume({ producerId, rtpCapabilities })) throw new Error('Cannot consume')

    const consumer = await transport.consume({
      producerId,
      rtpCapabilities,
      paused: false
    })
    this.consumers.set(consumer.id, consumer)
    this.consumerToTransport.set(consumer.id, transportId)
    consumer.on('transportclose', () => this.closeConsumer(consumer.id))
    return consumer
  }

  closeTransport(id: string) {
    const transport = this.transports.get(id)
    transport?.close()
    this.transports.delete(id)
    this.producers.forEach((_, pid) => {
      if (this.producerToTransport.get(pid) === id) {
        this.closeProducer(pid)
      }
    })
    this.consumers.forEach((_, cid) => {
      if (this.consumerToTransport.get(cid) === id) {
        this.closeConsumer(cid)
      }
    })
  }

  closeProducer(id: string) {
    const producer = this.producers.get(id)
    producer?.close()
    this.producers.delete(id)
    this.producerToTransport.delete(id)
    this.speakers.delete(id)
  }

  closeConsumer(id: string) {
    const consumer = this.consumers.get(id)
    consumer?.close()
    this.consumers.delete(id)
    this.consumerToTransport.delete(id)
  }

  getRtpCapabilities() {
    return this.router.rtpCapabilities
  }

  detectActiveSpeaker() {
    const sorted = [...this.speakers.entries()].filter(([_, score]) => score > 5).sort((a, b) => b[1] - a[1])
    const active = sorted.length > 0 ? sorted[0][0] : null
    if (active) this.emit('activeSpeaker', active)
  }

  cleanupUser(transports: string[], producers: string[], consumers: string[]) {
    transports.forEach(id => this.closeTransport(id))
    producers.forEach(id => this.closeProducer(id))
    consumers.forEach(id => this.closeConsumer(id))
  }
}