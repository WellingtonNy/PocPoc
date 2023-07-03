import { Request, Response } from "express";
import { todasAsRifas } from "../repositories/rifa-repositorie";
import httpStatus from "http-status";


export async function getRifa(req: Request, res: Response) {

    try {
        const resposta = await todasAsRifas()
        res.send(resposta)
    } catch (error) {
        console.log(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(':(')
    }
}