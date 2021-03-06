import { NextFunction, Request, Response } from 'express';
import asyncHandler from '@middlewares/asyncHandler';
import { ProductI } from '@interfaces/product';
import { ProductService } from '@service/productService';
import { ErrorResponse } from '@utils/errorRespnse';
import { CustomRequest } from '@middlewares/authMiddleware';

export const getProducts = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(await ProductService.getProducts(req));
});

export const geProductById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const product: ProductI | null = await ProductService.getProductById(req.params.id);
  if (!product) {
    res.status(404);
    throw new ErrorResponse(`Product not found id: ${req.params.id}`, 404);
  }
  res.status(200).json({
    status: 200,
    messges: 'Product found',
    product
  });
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


export const deleteProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const deleted: boolean = await ProductService.deleteProduct(req.params.id);
  if (!deleted) {
    res.status(404);
    throw new ErrorResponse(`Product not found id: ${req.params.id}`, 404);
  }
  res.status(200).json({
    status: 200,
    messges: 'Product deleted',
    deleted
  });
});

export const getTopProducts = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const products: ProductI[] | [] = await ProductService.getTopProducts();
  res.status(200).json({
    status: 200,
    messages: "Top products",
    products
  });
});

export const createProductReview = asyncHandler(async (req: CustomRequest, res: Response, next: NextFunction) => {
  const productId = req.params.id;
  const { rating, comment } = req.body;
  const product: ProductI | null = await ProductService.createProductReview(productId, req.user, rating, comment);
  if (!product) {
    res.status(404);
    throw new ErrorResponse('Product not found', 404);
  }
  res.status(201).json({
    status: 201,
    messages: 'product review created',
    product
  })

});