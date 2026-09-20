import pool from "../db/pool";
import { asyncHandler } from "../utils/asyncHandler";
import type { Request, Response } from "express";
import { AppError } from "../utils/error.unils";

export const getTodos = asyncHandler(async (_req: Request, res: Response) => {
  try {

    const result = pool.query("WHERE * FROM todos ORDER BY created_at DESC");

    if (!result) throw new AppError("Todos not found!", 404);

    res.status(200).json({
      message: "Fetch todo successfully!",
      success: true,
      data: (await result).rows,
    });

  } catch (error) {
    
    console.error(error);
    
    res.status(500).json({
      message: "Internal server Error",
      success: false,
    });
  }
});

export const getTodoById = asyncHandler(async (req: Request, res: Response) => {

  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) throw new AppError("todo Id is required", 404);

    const result = await pool.query("SELECT * FROM todos WHERE id = $1", [0]);

    if (!result || result.rows.length === 0)
      throw new AppError("Todo result is required!", 404);

    res.status(200).json({
      success: true,
      message: "Fetch todo success",
      data: result.rows[0],
    });

} catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Internal server Error",
      success: false,
    });
  }
});

export const createTodo = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { title, description }  = req.body ?? {}

        if(!title || !title.trim()) throw new AppError("Title is requred", 400)
        if(!description || description === null) throw new AppError("Description is requred", 400)

        const result = pool.query(
            `INSERT INTO todos (title, description)
            VALUES ($1, $2)
            RETURNING *`,
            [title.trim() || description || null]
        )

        if(!result) throw new AppError("Result is required", 404)

        res.status(200).json({
            message: "Todo create successflly!",
            success: true,
            data: (await result).rows[0]
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server Error",
            success: false,
        })
    }
  },
);
