"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_product_1 = require("../controllers/controller.product");
const router = (0, express_1.Router)();
router.get('/', controller_product_1.getProducts);
console.log('entro al router');
exports.default = router;
