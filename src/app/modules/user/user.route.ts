import express, { Router } from 'express';
import { createUser } from './user.controller';
const router: Router = express.Router();

router.get('/', createUser);

export default router;
