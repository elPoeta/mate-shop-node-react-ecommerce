import { Document } from "mongoose";
import { ReviewI } from '@interfaces/review';
export interface ProductI extends Document {
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
  reviews?: ReviewI[];
}
