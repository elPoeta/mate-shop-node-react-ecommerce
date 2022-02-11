import { model, Schema } from "mongoose";
import * as bcrypt from 'bcryptjs';
import { UserType } from '@interfaces/user';

const UserSchema: Schema = new Schema(
  {
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
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default model<UserType>("User", UserSchema);