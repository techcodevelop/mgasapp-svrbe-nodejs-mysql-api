"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_user_1 = require("../controllers/controller.user");
const router = (0, express_1.Router)();
router.post("/", controller_user_1.getUsers);
router.post("/newuser", controller_user_1.newUser);
exports.default = router;
