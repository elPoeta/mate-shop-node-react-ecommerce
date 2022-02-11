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
    const productResponse: ProductI = newProduct;
    return productResponse;
  },
  async updateProduct(_id: number | string | ObjectId, productParam: ProductI): Promise<ProductI | null> {
    const productFound: ProductType | null = await ProductModel.findById({ _id });
    if (!productFound) return null;
    Object.assign(productFound, productParam);
    await productFound.save();
    // productFound.name, 
    // productFound.image, 
    // productFound.description, 
    // productFound.brand, 
    // productFound.category, 
    // productFound.price, 
    // productFound.countInStock, 
    // productFound.rating, 
    // productFound.numReviews, 
    //productFound.discount = discount;
    await productFound.save()
    //const productResponse: ProductI = productFound;
    return productFound as ProductI;
    // const newProduct: ProductType = new ProductModel(productParam);
    // await newProduct.save();
    // const p: ProductI = newProduct
    // console.log("[P] ", p)
    // const productResponse: ProductI = newProduct;
    // return productResponse;
  },
}