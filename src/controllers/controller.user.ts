import { Request, Response } from 'express'

import { pool } from "../db/connection"

//import bcrypt from 'bcrypt'
//import { User } from '../models/user'
//import jwt from 'jsonwebtoken'

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

    



    //const [rows] = await pool.query("select * from users where username=?", [username]);

    //const user = await User.findOne({ where: { username: username } })




}