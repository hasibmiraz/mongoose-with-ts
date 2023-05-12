import express, { Router } from 'express';
import { createUser, getUsers } from './user.controller';
const router: Router = express.Router();

router.post('/get-user', getUsers);
router.post('/create-user', createUser);

export default router;
