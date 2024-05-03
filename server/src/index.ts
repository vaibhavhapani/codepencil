import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";
config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8000;

dbConnect();

app.use("/compiler", compilerRouter);

app.get('/', (req: Request, res: Response) => {
    return res.status(200).send("ok!");
})

app.listen(PORT, () => {
    console.log(`Server listening to port:${PORT}`);
})