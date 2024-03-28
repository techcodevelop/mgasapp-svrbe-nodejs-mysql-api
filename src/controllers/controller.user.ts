import { Request, Response } from 'express'
import { pool } from "../db/connection"

export const getUsers = async (req: Request, resp: Response) => {
    console.log("entro al getusers")
    try {
      const [rows] = await pool.query("select * from users");
      resp.json(rows);

    } catch (error) {
      return resp.status(500).json({
        message: "Something goes wrong",
      });
    }
  };  

export const newUser = async (req: Request, resp: Response) => {

    console.log("entro al newuser")
    const { username, password } = req.body
    // Validamos si el usuario ya existe en la bd
    const [user] = await pool.query("select * from users where username=?", [username]);
    console.log(user)
    if (user) {
        return resp.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        })
    }
 //guardamos usuarios en la bd
    const [rows] = await pool.query(
        "insert into users (name, salary) values (?, ?)",
        [username, password]
      );




}