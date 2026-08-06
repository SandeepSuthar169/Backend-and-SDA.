import { Router } from "express";

import {
    getBook, 
    createBook, 
    deleteBook, 
    getBookById, 
    updateBook 
} from "../controllers/bookController";

const router = Router();

router.get("/", getBook);
router.get("/:id", getBookById);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook)

export default router;

