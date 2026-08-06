import express, { type Request, type Response } from "express";

const app = express()

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Wencome to Express + TypeScript")
})

export default app;
