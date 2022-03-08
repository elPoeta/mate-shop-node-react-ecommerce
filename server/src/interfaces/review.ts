import { Schema, Document } from "mongoose";

export interface ReviewI extends Document {
  name: string;
  rating: number;
  comment: string;
  user: Schema.Types.ObjectId;
}
