import { Application } from "express";
import user from '@routes/users';
import { errorHandler } from "@middlewares/errorMiddleware";

export const routes = (app: Application) => {
  app.use('/api/v1/user', user);
  app.use(errorHandler);
} 