import { Schema, Document } from "mongoose";

export interface ReviewI {
  name: string;
  rating: number;
  comment: string;
  user: number | Schema.Types.ObjectId,
}

export type ReviewType = ReviewI & Document; 