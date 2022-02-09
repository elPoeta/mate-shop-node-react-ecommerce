import { NextFunction, Request, Response } from 'express';
import asyncHandler from '@middlewares/asyncHandler';

export const geProducts = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json([]);
});

export const createProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({});
});