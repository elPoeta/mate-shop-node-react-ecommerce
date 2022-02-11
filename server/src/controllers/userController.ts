import { CookieOptions, NextFunction, Request, Response } from "express";
import config from "@config/envConf";
import asyncHandler from "@middlewares/asyncHandler";
import { UserI } from "@interfaces/user";
import { UserService } from "@service/userService";
import { ErrorResponse } from "@utils/errorRespnse";
import { generateAuthToken } from "@utils/tokenManager";
import { matchPassword } from "@utils/userPasswordManager";

export const register = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const body: UserI = req.body as Pick<UserI, "_id" | "email" | "password" | "isAdmin" | "confirmPassword">;
  if (!body.password?.length || !body.confirmPassword?.length || body.confirmPassword !== body.password) {
    res.status(400);
    throw new ErrorResponse('Error password not match', 400);
  }
  const user: UserI = await UserService.createNewUser(body);
  sendTokenResponse(user, 201, res);
});

export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { email, password } = req.body;
  const user: UserI | any = UserService.findByEmail(email);
  if (!user && (await !matchPassword(password, user.password))) {
    res.status(401)
    throw new Error('Invalid email or password');
  }
  sendTokenResponse(user, 201, res);
});

const sendTokenResponse = (user: UserI, statusCode: number, res: Response) => {
  console.log("USER ", user)
  const token = generateAuthToken(user);

  const options: CookieOptions = {
    expires: new Date(
      Date.now() + config.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token
    });
};