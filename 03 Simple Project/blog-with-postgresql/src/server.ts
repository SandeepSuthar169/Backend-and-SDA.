import express, { type Request, type Response } from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


app.get("/health", (_req: Request, res: Response) => {

        res.status(200).json({
        messgae: "Book Store api is running!",
    });
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(`server running on port ${PORT}`);
});
