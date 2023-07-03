import { Request, Response } from "express";
import { postarResultado, todasAsRifas } from "../repositories/rifa-repositorie";
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


export async function postRifa(req: Request, res: Response) {
  const {dia,numero} = req.body
  
    try {
       await postarResultado(dia,numero)
        res.sendStatus(201)
    } catch (error) {
        console.log(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(':(')
    }
}