import { Router } from "express"
import rifaRouter from "./rifa.routes"

const router = Router()
router.use(rifaRouter)

export default router