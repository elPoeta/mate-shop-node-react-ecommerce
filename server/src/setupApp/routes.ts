import { Application } from "express";
import user from '@routes/users';
import product from '@routes/product';
import { errorHandler } from "@middlewares/errorMiddleware";

export const routes = (app: Application) => {
  app.use('/api/v1/user', user);
  app.use('/api/v1/product', product);
  app.use(errorHandler);
} 