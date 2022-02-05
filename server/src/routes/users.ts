import express, { Router } from 'express';
import { getUsers } from '@controllers/usersController';

const router: Router = express.Router();

router.route('/').get(getUsers);

export default router;

