import { Router } from "express";
import { deleteRifa, getRifa, postRifa, putRifa } from "../controllers/rifa-controller";
import { validateSchema } from "../middlewares/validateSchema.middlewares";
import { deleteSchema, postSchema, putSchema } from "../schemas/postRifa.schemas";




const rifaRouter = Router()

rifaRouter.get('/rifa',getRifa);
rifaRouter.post('/rifa',validateSchema(postSchema),postRifa);
rifaRouter.delete('/rifa',validateSchema(deleteSchema),deleteRifa);
rifaRouter.put('/rifa',validateSchema(putSchema),putRifa);


export default rifaRouter;