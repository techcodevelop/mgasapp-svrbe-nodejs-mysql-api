

import { Sequelize } from "sequelize";

import {
    DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER
    
    } from "../config"

const pool = new Sequelize(
    DB_DATABASE,
    DB_USER, 
    DB_PASSWORD,
    {
        host: DB_HOST,
       dialect: 'mysql'
    })

export default pool;


/* 
import { createPool } from "mysql2/promise";
import {
DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER

} from "../config"

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});

console.log('que esta pasando'+DB_HOST)
*/
