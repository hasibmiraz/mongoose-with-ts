import express, { Router } from 'express';
import {
  createUser,
  getAdminUser,
  getUserById,
  getUsers,
} from './user.controller';
const router: Router = express.Router();

router.post('/get-users', getUsers);
router.post('/create-user', createUser);
router.post('/get-admin-user', getAdminUser);
router.post('/get-user/:id', getUserById);

export default router;
