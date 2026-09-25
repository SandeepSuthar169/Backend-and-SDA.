import express, { type Request, type Response } from "express";
import pool from "../db/pool";

export const getBooks = async (req: Request, res: Response) => {
  try {
    // get all books
    const result = pool.query(
      `SELECT * FROM booksStore 
            ORDER BY created_at
            DESC`,
    );

    // validate books
    if (!result) {
      res.status(404).json({
        message: "Books not found",
      });
    }

    // return books
    res.status(200).json({
      message: "Fetch books successfully",
      success: true,
      data: (await result).rows,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getBooksId = async (req: Request, res: Response) => {
  try {
    // get Books Id
    const id = Number(req.params.id);

    // validate Books Id
    if (Number.isNaN(id)) {
      res.status(400).json({
        message: "Books id is required!",
      });
    }
    // find book by Id
    const result = pool.query(
      `SELECT * FROM booksStore 
            WHERE id = $1`,
      [id],
    );

    // validate Books
    if (!result || (await result).rows.length === 0) {
      res.status(404).json({
        message: "Book not found!",
      });
    }
    // return Books
    res.status(200).json({
      message: "Fetch Book by Id successfully",
      success: true,
      data: (await result).rows[0],
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    // get data from body
    const { content, slug, author } = req.body() ?? {}; 
    
    // validate data 
    if (!content || content.trim() === 0) {
      res.status(404).json({
        message: "content not found!",
      });
    }
    if (!slug || slug.trim() === 0) {
      res.status(404).json({
        message: "slug not found!",
      });
    }
    if (!author || author.trim() === 0) {
      res.status(404).json({
        message: "author not found!",
      });
    }

    // add data form db 
    const result = pool.query(
        `INSERT INTO booksStore (content, slug, author)
        VALUE ($1, $2, $3)
        RETURNING *`, 
        [content.trim(), slug.trim(), author.trim()]
    )

    // validate db
    if(!result || (await result).rows.length === 0){
        res.status(404).json({
            message: "Books is not created"
        })
    }

    // return data 
    res.status(200).json({
        message: "Books create successfully",
        success: true,
        data: (await result).rows[0],   
    })


  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const updateBookById = async (req: Request, res: Response) => {
  try {
    // get all books
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const deleteBookById = async (req: Request, res: Response) => {
  try {
    // get all books
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
