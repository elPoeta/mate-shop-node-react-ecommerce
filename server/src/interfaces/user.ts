import { Document, ObjectId } from "mongoose";

export interface User {
  ID?: string | number | ObjectId;
  email: string;
  password?: string;
  confirmPassword?: string | undefined;
  resetPasswordToken?: string;
  resetPasswordExpire?: Date;
  isAdmin: boolean;

}

export interface UserDocument extends User, Document { }