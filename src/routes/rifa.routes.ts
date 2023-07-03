import { Router } from "express";
import { getRifa } from "../controllers/rifa-controller";



const rifaRouter = Router()

rifaRouter.get('/rifa',getRifa);
//rifaRouter.post('/rifa',???);
//rifaRouter.put('/rifa',???);
//rifaRouter.delete('/rifa',???);


export default rifaRouter;