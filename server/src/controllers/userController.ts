import { NextFunction, Request, Response } from "express";
import asyncHandler from "@middlewares/asyncHandler";
import { User } from "@interfaces/user";
import { UserService } from "@service/userService";
import { ErrorResponse } from "@utils/errorRespnse";

export const register = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const body = req.body as Pick<User, "email" | "password" | "isAdmin" | "confirmPassword">;
  if (!body.password?.length || !body.confirmPassword?.length || body.confirmPassword !== body.password) {
    res.status(400);
    throw new ErrorResponse('Error password not match', 400);
  }

  const user: User = await UserService.createNewUser(body);
  res.status(201).json({
    statusCode: 201,
    message: 'User registred',
    id: user.ID,
    email: user.email,
    isAdmin: user.isAdmin
  });
});