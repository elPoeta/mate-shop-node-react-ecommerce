import { ProductI, ProductType } from "@interfaces/product";
import ProductModel from '@models/product';

export interface ProductRepositoryI {
  createProduct(product: ProductI): Promise<ProductI>
}

export const ProductRepository: ProductRepositoryI = {
  async createProduct(productParam: ProductI): Promise<ProductI> {
    const newProduct: ProductType = new ProductModel(productParam);
    await newProduct.save();
    const p: ProductI = newProduct
    console.log("[P] ", p)
    const productResponse: ProductI = newProduct;
    return productResponse;
  }
}