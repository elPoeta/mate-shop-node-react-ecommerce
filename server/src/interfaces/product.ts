import { ObjectId, Document } from "mongoose";

export interface ProductI {
  _id: string | number | ObjectId;
  name: string;
  image: string;
  alternateImages: string[];
  description: string;
  brand: string;
  category: string;
  specifications: {
    flavor: string | null;
    weight: number | null;
    unit: string | null;
  };
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  discount: number;
}

export type ProductType = ProductI & Document;