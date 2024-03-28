
import {pool} from "./db/connect"
import { Request, Response } from 'express'
import { Router } from "express";


 const ping = async (req: Request, res: Response) => {
    const [result] :any = await pool.query("select 1+3 as result");
   res.json('PONG');
   // res.json(result[0]);
    console.log(result[0])
  }

  const router = Router();

router.get("/ping", ping);

  export default router