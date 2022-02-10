import { Product } from "@interfaces/product"
import { ProductRepository } from "@repository/productRepository"

export interface ProductServiceI {
  createProduct(product: Product): Promise<Product>
}

export const ProductService: ProductServiceI = {
  async createProduct(productParam: Product): Promise<Product> {
    return await ProductRepository.createProduct(productParam);
  }
}