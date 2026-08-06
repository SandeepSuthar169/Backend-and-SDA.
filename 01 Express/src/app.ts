import express, { type Request, type Response } from "express";
import bookRouter from "./routes/bookRoutes"

const app = express()

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Wencome to Express + TypeScript")
})


app.use("/books", bookRouter)

export default app;
