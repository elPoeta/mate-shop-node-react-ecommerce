import { NextFunction, Request, Response } from 'express';
import asyncHandler from '@middlewares/asyncHandler';
import { Product } from '@interfaces/product';
import { ProductService } from '@service/productService';

export const geProducts = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json([]);
});

export const createProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { ID, name, image, description, brand, category, price, countInStock, rating, numReviews, discount } = req.body;
  const product: Product = await ProductService.createProduct(req.body);
  res.status(201).json({
    statusCode: 201,
    message: 'Product created',
    product
  });
});