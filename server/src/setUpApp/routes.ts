import { Application } from "express";
import users from '../routes/users';

export const routes = (app: Application) => {
  app.use('/api/v1/users', users);
} 