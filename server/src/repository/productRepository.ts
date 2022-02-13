import { ProductI, ProductType } from "@interfaces/product";
import ProductModel from '@models/product';
import { AdvancedResultsResponse, mongodbAdvancedResults } from "@utils/mongodbAdvancedResults";
import { Request } from "express";
import { ObjectId } from "mongoose";

export interface ProductRepositoryI {
  createProduct(product: ProductI): Promise<ProductI>;
  getProductById(_id: number | string): Promise<ProductI | null>;
  getProducts(req: Request): Promise<AdvancedResultsResponse>;
  updateProduct(_id: number | string | ObjectId, product: ProductI): Promise<ProductI | null>;
  deleteProduct(_id: number | string): Promise<boolean>;
}

export const ProductRepository: ProductRepositoryI = {
  async createProduct(productParam: ProductI): Promise<ProductI> {
    const newProduct: ProductType = new ProductModel(productParam);
    await newProduct.save();
    return newProduct as ProductI;
  },

  async getProducts(req: Request): Promise<AdvancedResultsResponse> {
    return await mongodbAdvancedResults('Product', req, 'reviews');
  },

  async getProductById(_id: string): Promise<ProductI | null> {
    const product: ProductType | null = await ProductModel.findById({ _id });
    if (!product) return null;
    return product as ProductI;
  },

  async updateProduct(_id: number | string | ObjectId, productParam: ProductI): Promise<ProductI | null> {
    const product: ProductType | null = await ProductModel.findById({ _id });
    if (!product) return null;
    Object.assign(product, productParam);
    await product.save();
    await product.save()
    return product as ProductI;
  },

  async deleteProduct(_id: string): Promise<boolean> {
    const product: ProductType | null = await ProductModel.findById({ _id });
    if (!product) return false;
    await product.remove();
    return true;
  }
}