import type { Request, Response } from "express"; 
import { books, type Book } from "../db/bookdb";




export const getBook = (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        data: books
    })
}


export const getBookById = (req: Request, res: Response ) => {
    const id = Number(req.params.id)

    const book = books.find(book => book.id === id)

    if(!book){
        res.status(404).json({
            success: false,
            message: "Book not found"
        })
        return
    }

    res.status(200).json({
        success: true,
        data: book
    })
}
// Create a new Book

export const createBook = (req: Request, res: Response) => {
    const { title, author } = req.body

    const newBook: Book = {
        id: books.length + 1,
        title,
        author
    }

    books.push(newBook)

    res.status(200).json({
        success: true,
        data: newBook, 
        message: "Book created Successfully"
    })
}


// Update a book 

export const updateBook = (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const book = books.find(book => book.id === id)

    if(!book){
        res.status(404).json({
            success: false,
            message: "Book not found",
        })
        return
    }
    book.title = req.body.title;
    book.author = req.body.author;

    res.status(200).json({
        success: true,
        data: book,
        message: "Book Update successfully"
    })
}