import { Router } from "express";
import {newUser, getUsers, loginUser} from '../controllers/controller.user'

const router = Router();

router.get('/', getUsers);
router.post('/new', newUser);
router.post('/login', loginUser);
console.log('entro al router')

export default router;