import { Document, Schema } from "mongoose";

export type Address = {
  street: string,
  number: number,
  location: string
}

export interface CustomerI {
  user: Schema.Types.ObjectId;
  phone: string;
  address: Address[];
}

export type CustomerType = CustomerI & Document;