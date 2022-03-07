import { CookieOptions, NextFunction, Request, Response } from "express";
import config from "@config/envConf";
import asyncHandler from "@middlewares/asyncHandler";
import { UserI } from "@interfaces/user";
import { UserService } from "@service/userService";
import { ErrorResponse } from "@utils/errorRespnse";
import { generateAuthToken } from "@utils/tokenManager";
import { matchPassword } from "@utils/userPasswordManager";

export const register = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const body: UserI = req.body;
  if (!body.password?.length || !body.confirmPassword?.length || body.confirmPassword !== body.password) {
    res.status(400);
    throw new ErrorResponse('Error password not match', 400);
  }
  const user: UserI = await UserService.createNewUser(body);
  sendTokenResponse(user, 201, res);
});

export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const user: UserI | null = await UserService.findByEmail(email);
  console.log('userI ', user);
  if (!user) {
    res.status(401)
    throw new Error('Invalid email or password');
  }
  const userPassword: string = user.password ? user.password : '';
  const match: boolean = await matchPassword(password, userPassword);
  if (match) {
    sendTokenResponse(user, 200, res);
  } else {
    res.status(401)
    throw new Error('Invalid email or password');
  }
});

const sendTokenResponse = (user: UserI, statusCode: number, res: Response) => {
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