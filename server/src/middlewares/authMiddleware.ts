import { ErrorResponse } from "@utils/errorRespnse";
import config from "@config/envConf";
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler";
import { UserRepository } from "@repository/userRepository";
import { UserI, UserRequest } from "@interfaces/user";

export interface CustomRequest extends Request {
  user?: UserRequest;
}

export const protectedRoute = asyncHandler(async (req: CustomRequest, res: Response, next: NextFunction) => {
  let token: string | undefined | null;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decode = jwt.verify(token, config.JWT_SECRET);
      const user: UserI | null = await UserRepository.findById((<any>decode).id);
      if (!user) {
        res.status(401)
        throw new Error('Not authorized, no token')
      }
      req.user = {
        id: user._id,
        name: user.name,
        isAdmin: user.isAdmin,
        email: user.email
      }
      next();
    } catch (error) {
      console.error(error)
      res.status(401);
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
});

export const adminRoute = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
    return;
  }
  res.status(401);
  throw new ErrorResponse("Not authorized", 401);
}