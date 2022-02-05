import { NextFunction, Request, Response } from "express"
import asyncHandler from "@middlewares/asyncHandler";

export const getUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  res.status(200).json([{ email: 'leonardo.a.tosetto@gmail.com', isAdmin: true }]);
});