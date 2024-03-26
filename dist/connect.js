"use strict";
/* import { Sequelize } from "sequelize";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "../config"

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD,
  { host: DB_HOST, dialect: 'mysql' })

export default sequelize;*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
const config_1 = require("./config");
exports.pool = (0, promise_1.createPool)({
    host: config_1.DB_HOST,
    user: config_1.DB_USER,
    password: config_1.DB_PASSWORD,
    port: config_1.DB_PORT,
    database: config_1.DB_DATABASE,
});
console.log('que esta pasando' + config_1.DB_HOST);
