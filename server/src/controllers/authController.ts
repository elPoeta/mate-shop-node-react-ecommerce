import { NextFunction, Request, Response } from "express";
import asyncHandler from "@middlewares/asyncHandler";
import { User } from "@interfaces/user";
import { AuthService } from "@service/authService";

export const register = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const body = req.body as Pick<User, "email" | "password" | "isAdmin" | "confirmPassword">;
  const user: User = await AuthService.createNewUser(body);
  res.status(201).json({
    message: 'User registred',
    id: user.ID,
    email: user.email,
    isAdmin: user.isAdmin
  });
});