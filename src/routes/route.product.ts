import { Router } from "express";

import { getProducts } from "../controllers/controller.product";
import validateToken from "./validate-token";

const router = Router();

router.get('/',validateToken, getProducts);

console.log('entro al router')

export default router;