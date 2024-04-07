import { Request, Response } from 'express'
import { pool } from "../db/connection"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const getProducts = async (req: Request, resp: Response) => {
  try {
    const [rows] = await pool.query("select * from products");
    resp.json(rows);
  } catch (error) {
    return resp.status(500).json({
      message: "Something goes wrong",
    });
  }
};


