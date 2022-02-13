import { ProductI } from "@interfaces/product"
import { ProductRepository } from "@repository/productRepository"
import { ObjectId } from "mongoose";

export interface ProductServiceI {
  createProduct(product: ProductI): Promise<ProductI>;
  getProductById(_id: number | string): Promise<ProductI | null>;
  updateProduct(_id: number | string | ObjectId, product: ProductI): Promise<ProductI | null>;
  deleteProduct(_id: number | string): Promise<boolean>;
}

export const ProductService: ProductServiceI = {
  async createProduct(productParam: ProductI): Promise<ProductI> {
    return await ProductRepository.createProduct(productParam);
  },

  async getProductById(_id: number | string): Promise<ProductI | null> {
    return await ProductRepository.getProductById(_id);
  },

  async updateProduct(_id: number | string | ObjectId, product: ProductI): Promise<ProductI | null> {
    return await ProductRepository.updateProduct(_id, product);
  },

  async deleteProduct(_id: number | string): Promise<boolean> {
    return await ProductRepository.deleteProduct(_id);
  }
}