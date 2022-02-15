import { Schema, Document } from "mongoose";

export interface ReviewI {
  name: string;
  rating: number;
  comment: string;
  user: number | string | Schema.Types.ObjectId;
}

export type ReviewType = ReviewI & Document; 