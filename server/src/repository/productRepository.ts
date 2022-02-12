import { ProductI, ProductType } from "@interfaces/product";
import ProductModel from '@models/product';
import { ObjectId } from "mongoose";

export interface ProductRepositoryI {
  createProduct(product: ProductI): Promise<ProductI>;
  updateProduct(_id: number | string | ObjectId, product: ProductI): Promise<ProductI | null>;

}

export const ProductRepository: ProductRepositoryI = {
  async createProduct(productParam: ProductI): Promise<ProductI> {
    const newProduct: ProductType = new ProductModel(productParam);
    await newProduct.save();
    return newProduct as ProductI;
  },
  async updateProduct(_id: number | string | ObjectId, productParam: ProductI): Promise<ProductI | null> {
    const productFound: ProductType | null = await ProductModel.findById({ _id });
    if (!productFound) return null;
    Object.assign(productFound, productParam);
    await productFound.save();
    await productFound.save()
    return productFound as ProductI;
  },
}