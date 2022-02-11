import { ProductI } from "@interfaces/product"
import { ProductRepository } from "@repository/productRepository"

export interface ProductServiceI {
  createProduct(product: ProductI): Promise<ProductI>
}

export const ProductService: ProductServiceI = {
  async createProduct(productParam: ProductI): Promise<ProductI> {
    return await ProductRepository.createProduct(productParam);
  }
}