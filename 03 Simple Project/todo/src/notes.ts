import express, {type Response, type Request} from "express"
import { notes, type Note } from "../Database/noteDb"

const app = express();

const PORT = 3000;


app.get("/notes", (req: Request, res: Response) => {
    res.status(200).json(notes)
})

app.get("/notes/:id", (req: Request, res: Response) => {
    const  id   = Number(req.params.id
)
    const note = notes.find((note) => note.id === id)

    if(!note){
        res.status(400).json({
            message: "Note not found!"
        })
    }

    res.status(200).json({
        note,
        message: "Fetch Note successfully"
    })
})

app.post("/notes", (req, res) => {
    // get notes body from body
    // check notes body
    // create new notes with Id +1
    // push onto the Notes database
    // returh status successful
})

app.listen(PORT, () => {
    console.log("Server listening on POST", PORT);
    
})