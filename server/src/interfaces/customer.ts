import { Document, Schema } from "mongoose";

export type Address = {
  country: string,
  city: string,
  street: string,
  number: number,
  postalCode: string
}

export interface CustomerI extends Document {
  user: Schema.Types.ObjectId;
  phone: string;
  address: Address[];
}
