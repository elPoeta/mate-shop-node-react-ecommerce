import { Document, ObjectId } from "mongoose";

export interface UserI extends Document {
  name: string;
  email: string;
  password: string | undefined;
  confirmPassword: string | undefined;
  resetPasswordToken?: string;
  resetPasswordExpire?: Date;
  isAdmin: boolean;
}
export interface UserRequest {
  id: ObjectId;
  name: string;
  isAdmin: boolean,
  email: string;
}