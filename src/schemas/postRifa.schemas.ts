import exp from "constants"
import joi from "joi"
import { type } from "os"

type PRifa={
    dia:string,
    numero:number
}

type IdRifa={
    id:number
}

type RifaAtt={
    id:number,
    dia:string,
    numero:number
}


export const putSchema = joi.object<RifaAtt>({
    id: joi.number().required(),
    dia: joi.string().required(),
    numero: joi.number().required(),
})


export const postSchema = joi.object<PRifa>({
    dia: joi.string().required(),
    numero: joi.number().required(),
})

export const deleteSchema = joi.object<IdRifa>({
    
    id: joi.number().required()
})
