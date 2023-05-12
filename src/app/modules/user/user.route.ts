import express, { Router } from 'express';
import { createUser, getUserById, getUsers } from './user.controller';
const router: Router = express.Router();

router.post('/get-users', getUsers);
router.post('/create-user', createUser);
router.post('/get-user/:id', getUserById);

export default router;
