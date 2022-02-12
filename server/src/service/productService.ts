import { ProductI } from "@interfaces/product"
import { ProductRepository } from "@repository/productRepository"
import { ObjectId } from "mongoose";

export interface ProductServiceI {
  createProduct(product: ProductI): Promise<ProductI>;
  getProduct(_id: number | string): Promise<ProductI | null>;
  updateProduct(_id: number | string | ObjectId, product: ProductI): Promise<ProductI | null>;
}

export const ProductService: ProductServiceI = {
  async createProduct(productParam: ProductI): Promise<ProductI> {
    return await ProductRepository.createProduct(productParam);
  },

  async getProduct(_id: number | string): Promise<ProductI | null> {
    return await ProductRepository.getProduct(_id);
  },

  async updateProduct(_id: number | string | ObjectId, product: ProductI): Promise<ProductI | null> {
    return await ProductRepository.updateProduct(_id, product);
  }
}