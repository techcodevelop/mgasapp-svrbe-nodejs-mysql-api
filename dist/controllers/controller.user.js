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
exports.newUser = exports.getUsers = void 0;
const connection_1 = require("../db/connection");
const getUsers = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield connection_1.pool.query("select * from users");
        resp.json(rows);
    }
    catch (error) {
        return resp.status(500).json({
            message: "Something goes wrong",
        });
    }
});
exports.getUsers = getUsers;
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
});
exports.newUser = newUser;
