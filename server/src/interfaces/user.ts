import { Document, ObjectId } from "mongoose";

export interface UserI extends Document {
  //   _id: string | number | ObjectId;
  name: string;
  email: string;
  password: string | undefined;
  confirmPassword: string | undefined;
  resetPasswordToken?: string;
  resetPasswordExpire?: Date;
  isAdmin: boolean;
}
// export interface UserI {
//   _id: string | number | ObjectId;
//   name: string;
//   email: string;
//   password: string | undefined;
//   confirmPassword?: string | undefined;
//   resetPasswordToken?: string;
//   resetPasswordExpire?: Date;
//   isAdmin: boolean;

// }

//export type UserType = UserI & Document;

export interface UserRequest {
  id: null | string | number | ObjectId;
  name: string;
  isAdmin: boolean,
  email: string;
}