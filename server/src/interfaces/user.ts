import { Document } from "mongoose";

export interface UserI extends Document {
  email: string;
  password: number;
  resetPasswordToken: string;
  resetPasswordExpire: Date;
  isAdmin: boolean;
}