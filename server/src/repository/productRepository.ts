import { Product, ProductDocument } from "@interfaces/product";
import ProductModel from '@models/product';

export interface ProductRepositoryI {
  createProduct(product: Product): Promise<Product>
}

export const ProductRepository: ProductRepositoryI = {
  async createProduct(productParam: Product): Promise<Product> {
    const { ID, ...rest } = productParam;
    const newProduct: ProductDocument = new ProductModel({ ...rest });
    await newProduct.save();
    const productResponse: Product = { ID: newProduct._id, name: newProduct.name, image: newProduct.image, description: newProduct.description, brand: newProduct.brand, category: newProduct.category, price: newProduct.price, countInStock: newProduct.countInStock, rating: newProduct.rating, numReviews: newProduct.numReviews, discount: newProduct.discount };
    return productResponse;
  }
}