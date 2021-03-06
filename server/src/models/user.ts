import { model, Schema } from "mongoose";
import * as argon2 from "argon2";
import { UserI } from '@interfaces/user';

const UserSchema: Schema = new Schema<UserI>(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 255,
      required: true
    },
    email: {
      type: String,
      minlength: 5,
      maxlength: 255,
      unique: true,
      lowercase: true,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 255,
      required: [true, 'Please add a password'],
      select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await argon2.hash(this.password);
});

export default model<UserI>("User", UserSchema);