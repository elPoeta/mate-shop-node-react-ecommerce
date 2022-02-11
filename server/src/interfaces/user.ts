import { Document, ObjectId } from "mongoose";

export interface UserI {
  _id: string | number | ObjectId;
  email: string;
  password?: string;
  confirmPassword?: string | undefined;
  resetPasswordToken?: string;
  resetPasswordExpire?: Date;
  isAdmin: boolean;

}

export type UserType = UserI & Document;