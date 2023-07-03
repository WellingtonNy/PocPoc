import express from "express"
import router from "./routes/index.routes";
import dotenv from "dotenv"

dotenv.config();
const app = express();
app.use(express.json());
app.use(router);

const PORT = +process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));