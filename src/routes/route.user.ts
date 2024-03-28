import { Router } from "express";
import {newUser, getUsers} from '../controllers/controller.user'

const router = Router();

router.get('/', getUsers);
router.post('/new', newUser);
console.log('entro al router')

export default router;