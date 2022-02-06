import express, { Router } from 'express';
import { register } from '@controllers/userController';

const router: Router = express.Router();

router.route('/register').post(register);

export default router;

