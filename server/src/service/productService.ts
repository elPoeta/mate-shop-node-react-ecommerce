import { ProductI } from "@interfaces/product"
import { UserRequest } from "@interfaces/user";
import { ProductRepository } from "@repository/productRepository"
import { AdvancedResultsResponse } from "@utils/mongodbAdvancedResults";
import { Request } from "express";
import { ObjectId } from "mongoose";

export interface ProductServiceI {
  createProduct(product: ProductI): Promise<ProductI>;
  getProductById(_id: number | string): Promise<ProductI | null>;
  getProducts(req: Request): Promise<AdvancedResultsResponse>;
  updateProduct(_id: number | string | ObjectId, product: ProductI): Promise<ProductI | null>;
  deleteProduct(_id: number | string): Promise<boolean>;
  getTopProducts(): Promise<ProductI[] | []>;
  createProductReview(productId: string, user: UserRequest, rating: number, comment: string): Promise<ProductI | null>;
}

export const ProductService: ProductServiceI = {
  async createProduct(productParam: ProductI): Promise<ProductI> {
    return await ProductRepository.createProduct(productParam);
  },

  async getProductById(_id: number | string): Promise<ProductI | null> {
    return await ProductRepository.getProductById(_id);
  },

  async getProducts(req: Request): Promise<AdvancedResultsResponse> {
    return await ProductRepository.getProducts(req);
  },

  async updateProduct(_id: number | string | ObjectId, product: ProductI): Promise<ProductI | null> {
    return await ProductRepository.updateProduct(_id, product);
  },

  async deleteProduct(_id: number | string): Promise<boolean> {
    return await ProductRepository.deleteProduct(_id);
  },

  async getTopProducts(): Promise<ProductI[] | []> {
    return await ProductRepository.getTopProducts();
  },

  async createProductReview(productId: string, user: UserRequest, rating: number, comment: string): Promise<ProductI | null> {
    return await ProductRepository.createProductReview(productId, user, rating, comment);
  }
}