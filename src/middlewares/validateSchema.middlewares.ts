import { Request, Response } from "express";

export function validateSchema(schema) {

    return (req:Request, res:Response, next:any) => {

        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {

            const errors = validation.error.details.map(detail => detail.message)

            return res.status(400).send(errors)
        }

        next()

    }
}