import { Router } from "express";

import { getProducts } from "../controllers/controller.product";

const router = Router();

router.get('/', getProducts);

console.log('entro al router')

export default router;