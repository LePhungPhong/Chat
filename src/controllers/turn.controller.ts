import { Request, Response } from 'express'
import { buildTurnCredentials } from '../services/turn.service'

export async function getTurnCredentials(req: Request, res: Response) {
    const data = buildTurnCredentials()
    return res.json(data)
}
