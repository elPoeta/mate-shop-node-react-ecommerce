import { NextFunction, Request, Response } from 'express';
import asyncHandler from '@middlewares/asyncHandler';
import { ProductI } from '@interfaces/product';
import { ProductService } from '@service/productService';
import { ErrorResponse } from '@utils/errorRespnse';

export const geProducts = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json([]);
});

export const createProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { name, image, description, brand, category, price, countInStock, rating, numReviews, discount } = req.body;
  const product: ProductI = await ProductService.createProduct(req.body);
  res.status(201).json({
    statusCode: 201,
    message: 'Product created',
    product
  });
});

export const updateProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const _id = req.params.id;
  const { name, image, description, brand, category, price, countInStock, rating, numReviews, discount } = req.body;
  const product: ProductI | null = await ProductService.updateProduct(_id, req.body);
  if (!product) {
    res.status(404);
    throw new ErrorResponse(`Product not found with id: ${req.params.id}`, 404);
  }
  res.status(200).json({
    statusCode: 200,
    message: 'Product updated',
    product
  });
});