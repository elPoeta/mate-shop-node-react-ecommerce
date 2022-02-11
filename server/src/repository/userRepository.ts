import UserModel from '@models/user';
import { UserI, UserType } from '@interfaces/user';
import { Types } from 'mongoose';

export interface UserRepositoryI {
  createNewUser(userParam: UserI): Promise<UserI>;
  findByEmail(email: string): Promise<UserI | any>;
  findById(id: string): Promise<UserI | any>;
}

export const UserRepository: UserRepositoryI = {
  async createNewUser(userParam: UserI) {
    const user: UserType = new UserModel({
      email: userParam.email,
      password: userParam.password,
      isAdmin: false
    });
    await user.save();
    const userResponse: UserI = user;
    return userResponse;
  },
  async findByEmail(email: string) {
    const user: UserType | null = await UserModel.findOne({ email: email }).select('-password');
    if (!user) return null;
    const userResponse: UserI = user;
    return userResponse;
  },
  async findById(id: string) {
    const user: UserType | null = await UserModel.findById({ _id: new Types.ObjectId(id) }).select('-password');
    if (!user) return null;
    const userResponse: UserI = user;
    return userResponse;
  }

}