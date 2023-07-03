import { Router } from "express";
import { getRifa, postRifa } from "../controllers/rifa-controller";



const rifaRouter = Router()

rifaRouter.get('/rifa',getRifa);
rifaRouter.post('/rifa',postRifa);
//rifaRouter.put('/rifa',???);
//rifaRouter.delete('/rifa',???);


export default rifaRouter;