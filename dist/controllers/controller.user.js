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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = exports.getUsers = void 0;
const connection_1 = require("../db/connection");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
    // capturamos las info del body
    const { username, password } = req.body;
    // Validamos si el usuario ya existe en la bd
    const rows = yield connection_1.pool.query("select username from users where username=?", [username]);
    // si el resultado es 0, se agergara el usuario
    if (rows[0].length > 0) {
        return resp.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        });
    }
    //hashea la cotraseña con una complejidad de 10
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        const [rows] = yield connection_1.pool.query("insert into users (username, password) values (?, ?)", [username, hashedPassword]);
        resp.json({
            msg: `Usuario ${username} created successfully`
        });
    }
    catch (error) {
        resp.status(400).json({ msg: 'Upps ourrio un error',
            error
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("entro al login user");
    const { username, password } = req.body;
    // Validamos si el usuario ya existe en la bd
    const rows = yield connection_1.pool.query("select username, password from users where username=?", [username]);
    // si el resultado es 0, se agergara el usuario
    if (rows[0].length <= 0) {
        return resp.status(400).json({
            msg: `No existe un usuario: ${username}, registrado!! `
        });
    }
    // validamos password
    const passwordValid = yield bcrypt_1.default.compare(password, rows[0][0].password);
    if (!passwordValid) {
        return resp.status(400).json({
            msg: `Incorrect Password`
        });
    }
    // generamos token
    const token = jsonwebtoken_1.default.sign({
        username: username
    }, process.env.SECRET_KEY || 'pepito123', { expiresIn: '10000' });
    console.log(token);
    resp.json(token);
});
exports.loginUser = loginUser;
