import { Router } from "express";

import {newUser, getUsers} from '../controllers/controller.user'

const router = Router();

router.post("/", getUsers);
router.post("/new", newUser);


export default router;