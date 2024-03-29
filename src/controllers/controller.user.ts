import { Request, Response } from 'express'
import { pool } from "../db/connection"
import { ResultSetHeader, RowDataPacket } from 'mysql2';


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
    const rows :any = await pool.query("select username from users where username=?", [username]);
    

    console.log(rows[0].length)
    console.log(rows[0])
    //console.log([rows])


    if (rows[0].length<=0) {

      const [rows] = await pool.query("insert into users (username, password) values (?, ?)",
           [username, password])
      resp.json({
        msg: `Usuario ${username} created successfully`
    })
       
    } else {

      return resp.status(400).json({
        msg: `Ya existe un usuario con el nombre ${username}`
    })

      
      console.log("se registro en la base de datos")
    
    }
 //guardamos usuarios en la bd
 //   const [rows] = await pool.query(
   //     "insert into users (name, salary) values (?, ?)",
     //   [username, password]
     // );
}