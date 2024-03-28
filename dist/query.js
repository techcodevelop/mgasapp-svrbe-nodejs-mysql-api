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
const connect_1 = require("./db/connect");
const express_1 = require("express");
const ping = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connect_1.pool.query("select 1+3 as result");
    res.json('PONG');
    // res.json(result[0]);
    console.log(result[0]);
});
const router = (0, express_1.Router)();
router.get("/ping", ping);
exports.default = router;
