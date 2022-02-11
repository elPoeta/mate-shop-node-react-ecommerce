import { ObjectId, Document } from "mongoose";

export interface ProductI {
  _id: string | number | ObjectId | null;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  discount: number;
}

export type ProductType = ProductI & Document;