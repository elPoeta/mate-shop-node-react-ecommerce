import { NextFunction, Request, Response } from "express";
import asyncHandler from "@middlewares/asyncHandler";
import { UserI } from "@interfaces/user";
import User from '@models/user';

export const register = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const body = req.body as Pick<UserI, "email" | "password">;
  const user: UserI = new User({
    email: body.email,
    password: body.password,
    isAdmin: false
  });
  await user.save();
  const { email, isAdmin, ...rest } = user;
  res.status(201).json({
    message: 'User registred',
    email,
    isAdmin
  });
});