import express, { type Response, type Request } from "express";
import { notes, type Note } from "../Database/noteDb";

const app = express();

const PORT = 3000;


app.use(express.json());


app.get("/notes", (req: Request, res: Response) => {
  res.status(200).json(notes);
});

app.get("/notes/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);

  if (!note) {
    res.status(400).json({
      message: "Note not found!",
    });
  }

  res.status(200).json({
    note,
    message: "Fetch Note successfully",
  });
});

app.post("/notes", (req: Request, res: Response) => {
  // get notes body from body
  const { title, description } = req.body;


  // check notes body
//   if (!title || !description) {
//     res.status(400).json({
//         message: "Notes items is required!"
//     })
//   }


  // create new notes with Id +1
  const newNote: Note = {
    id: notes.length + 1,
    title,
    description
  }
  // push onto the Notes database

  notes.push(newNote)
  // returh status successful
  console.log("newNote", newNote);
  

  res.status(200).json({
    notes: newNote,
    message: "New Notes create successfull!"
  })
});

app.listen(PORT, () => {
  console.log("Server listening on POST", PORT);
});
