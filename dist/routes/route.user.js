"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_user_1 = require("../controllers/controller.user");
const router = (0, express_1.Router)();
router.get("/", controller_user_1.getUsers);
router.post("/new", controller_user_1.newUser);
console.log("entro al router");
exports.default = router;
