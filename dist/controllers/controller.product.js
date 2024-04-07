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
exports.getProducts = void 0;
const connection_1 = require("../db/connection");
const getProducts = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield connection_1.pool.query("select * from products");
        resp.json(rows);
    }
    catch (error) {
        return resp.status(500).json({
            message: "Something goes wrong",
        });
    }
});
exports.getProducts = getProducts;
