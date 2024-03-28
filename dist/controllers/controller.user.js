"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = void 0;
const connection_1 = require("../db/connection");
//import bcrypt from 'bcrypt'
//import { User } from '../models/user'
//import jwt from 'jsonwebtoken'
const newUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("entro al newuser");
    const { username, password } = req.body;
    // Validamos si el usuario ya existe en la bd
    const [user] = yield connection_1.pool.query("select * from users where username=?", [username]);
    console.log(user);
    if (user) {
        return resp.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        });
    }
    //guardamos usuarios en la bd
    const [rows] = yield connection_1.pool.query("insert into users (name, salary) values (?, ?)", [username, password]);
    //const [rows] = await pool.query("select * from users where username=?", [username]);
    //const user = await User.findOne({ where: { username: username } })
});
exports.newUser = newUser;
