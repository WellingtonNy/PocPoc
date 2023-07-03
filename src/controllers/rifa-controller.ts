import { Request, Response } from "express";
import { attResultado, deletarResultado, postarResultado, todasAsRifas } from "../repositories/rifa-repositorie";
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

export async function deleteRifa(req: Request, res: Response) {
    const {id} = req.body
    
      try {
         await deletarResultado(id)
          res.sendStatus(200)
      } catch (error) {
          console.log(error);
          res.status(httpStatus.INTERNAL_SERVER_ERROR).send(':(')
      }
  }

  export async function putRifa(req: Request, res: Response) {
    const {id,dia,numero} = req.body
    
      try {
         await attResultado(id,dia,numero)
          res.sendStatus(200)
      } catch (error) {
          console.log(error);
          res.status(httpStatus.INTERNAL_SERVER_ERROR).send(':(')
      }
  }