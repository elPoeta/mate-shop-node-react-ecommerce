import UserModel from '@models/user';
import { UserI, UserType } from '@interfaces/user';
import { Types } from 'mongoose';

export interface UserRepositoryI {
  createNewUser(userParam: UserI): Promise<UserI>;
  findByEmail(email: string): Promise<UserI | null>;
  findById(id: string): Promise<UserI | any>;
}

export const UserRepository: UserRepositoryI = {
  async createNewUser(userParam: UserI) {
    const user: UserType = new UserModel({
      name: userParam.name,
      email: userParam.email,
      password: userParam.password,
      isAdmin: false
    });
    await user.save();
    return user as UserI;
  },
  async findByEmail(email: string): Promise<UserI | null> {
    const user: UserType | null = await UserModel.findOne({ email: email });
    if (!user) return null;
    return user as UserI;
  },
  async findById(id: string) {
    const user: UserType | null = await UserModel.findById({ _id: new Types.ObjectId(id) }).select('-password');
    if (!user) return null;
    return user as UserI;
  }

}