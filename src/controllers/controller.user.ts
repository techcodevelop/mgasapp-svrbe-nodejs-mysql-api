import { Request, Response } from 'express'
import { pool } from "../db/connection"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const getUsers = async (req: Request, resp: Response) => {
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
  // capturamos las info del body
  const { username, password } = req.body

  // Validamos si el usuario ya existe en la bd
  const rows: any = await pool.query("select username from users where username=?", [username]);
  // si el resultado es 0, se agergara el usuario

  if (rows[0].length > 0) {
    return resp.status(400).json({
      msg: `Ya existe un usuario con el nombre ${username}`
    })
  }
  //hashea la cotraseña con una complejidad de 10
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const [rows] = await pool.query("insert into users (username, password) values (?, ?)", [username, hashedPassword])
    resp.json({
      msg: `Usuario ${username} created successfully`
    })
  } catch (error) {
    resp.status(400).json({
      msg: 'Upps ourrio un error',
      error
    })
  }
}


export const loginUser = async (req: Request, resp: Response) => {
  console.log("entro al login user")
  const { username, password } = req.body

  // Validamos si el usuario ya existe en la bd
  const rows: any = await pool.query("select username, password from users where username=?", [username]);
  // si el resultado es 0, se agergara el usuario
  if (rows[0].length <= 0) {
    return resp.status(400).json({
      msg: `No existe un usuario: ${username}, registrado!! `
    })
  }
  // validamos password
  const passwordValid = await bcrypt.compare(password, rows[0][0].password)
  if (!passwordValid) {
    return resp.status(400).json({
      msg: `Incorrect Password`
    })
  }

  // generamos token
  const token = jwt.sign({
    username: username
  }, process.env.SECRET_KEY || 'pepito123'
    , { expiresIn: '100000' }
  )

  console.log(token)

  resp.json(token)
}