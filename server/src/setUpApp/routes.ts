import { Application } from "express";
import auth from '../routes/auth';
import users from '../routes/users';
import { errorHandler } from "../middlewares/errorMiddleware";

export const routes = (app: Application) => {
  app.use('/api/v1/auth', auth);
  app.use('/api/v1/users', users);
  app.use(errorHandler);
} 