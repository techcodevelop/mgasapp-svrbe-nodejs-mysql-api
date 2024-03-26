"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const query_1 = __importDefault(require("./query"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // convierte los datos recibidos a json
app.use(query_1.default);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    });
});
// veriifar
exports.default = app;
