import UserModel from '@models/user';
import { User, UserDocument } from '@interfaces/user';
import { Types } from 'mongoose';

export interface UserRepositoryI {
  createNewUser(userParam: User): Promise<User>;
  findByEmail(email: string): Promise<User | any>;
  findById(id: string): Promise<User | any>;
}

export const UserRepository: UserRepositoryI = {
  async createNewUser(userParam: User) {
    const user: UserDocument = new UserModel({
      email: userParam.email,
      password: userParam.password,
      isAdmin: false
    });
    await user.save();
    const userResponse: User = { ID: user._id, email: user.email, isAdmin: user.isAdmin };
    return userResponse;
  },
  async findByEmail(email: string) {
    const user: UserDocument | null = await UserModel.findOne({ email: email });
    if (!user) return null;
    const userResponse: User = { ID: user._id, email: user.email, isAdmin: user.isAdmin, password: user.password }
    return userResponse;
  },
  async findById(id: string) {
    const user: UserDocument | null = await UserModel.findById({ _id: new Types.ObjectId(id) });
    if (!user) return null;
    const userResponse: User = { ID: user._id, email: user.email, isAdmin: user.isAdmin }
    return userResponse;
  }

}