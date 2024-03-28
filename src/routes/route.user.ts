import { Router } from "express";

import {newUser} from '../controllers/controller.user'

const router = Router();

router.post("/", newUser);


export default router;