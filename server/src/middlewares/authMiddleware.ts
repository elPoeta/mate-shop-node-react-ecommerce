import { ErrorResponse } from "@utils/errorRespnse";
import config from "@config/envConf";
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";
import asyncHandler from "./asyncHandler";
import { UserRepository } from "@repository/userRepository";
import { User } from "@interfaces/user";

interface CustomRequest extends Request {
  user?: {
    id: null | string | number | ObjectId;
    isAdmin: boolean,
    email: string;
  };
}

export const protectedRoute = asyncHandler(async (req: CustomRequest, res: Response, next: NextFunction) => {
  let token: string | undefined | null;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decode = jwt.verify(token, config.JWT_SECRET);
      const user: User | null = await UserRepository.findById((<any>decode).id);
      if (!user) {
        res.status(401)
        throw new Error('Not authorized, no token')
      }
      req.user = {
        id: user.ID,
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
  }
  res.status(401);
  throw new ErrorResponse("Not authorized", 401);
}