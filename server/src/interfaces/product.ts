import { ObjectId } from "mongoose";

export interface Product {
  ID: string | number | ObjectId;
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

export interface ProductDocument extends Product, Document { }