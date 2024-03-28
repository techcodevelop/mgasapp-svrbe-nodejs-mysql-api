"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const pool = new sequelize_1.Sequelize(config_1.DB_DATABASE, config_1.DB_USER, config_1.DB_PASSWORD, {
    host: config_1.DB_HOST,
    dialect: 'mysql'
});
exports.default = pool;
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
