import type { Request, Response } from "express";

// Get all books

export const getBook = (req: Request, res: Response): void => {
    res.status(200).json({
        success: true,
        message: "list of all books",
        data: [
            {
                id: 1,
                title: "Node.js Basics",
                author: "John Smith"
            },
            {
                id: 2,
                title: "Learning TypeScript",
                author: "Jane Doe"
            }
        ]
    })
}

// Get single book

export const getBookById = (req: Request, res: Response ): void => {
    const {id} = req.params;

    res.status(200).json({
        success: true,
        message: `BOOK WITH ID: ${id}`,
        data: {
            id,
            title: "Node.js Basics",
            author: "John Smith"
        }
    })
}

// Add new Book 

