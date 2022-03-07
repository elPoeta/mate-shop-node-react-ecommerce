import UserModel from '@models/user';
import { UserI } from '@interfaces/user';
import { Types } from 'mongoose';

export interface UserRepositoryI {
  createNewUser(userParam: UserI): Promise<UserI>;
  findByEmail(email: string): Promise<UserI | null>;
  findById(id: string): Promise<UserI | any>;
}

export const UserRepository: UserRepositoryI = {
  async createNewUser(userParam: UserI) {
    const user: UserI = new UserModel({
      name: userParam.name,
      email: userParam.email,
      password: userParam.password,
      isAdmin: false
    });
    await user.save();
    return user as UserI;
  },
  async findByEmail(email: string): Promise<UserI | null> {
    const user: UserI | null = await UserModel.findOne({ email: email }, 'email isAdmin name password');
    console.log("USER-REPO ", user)
    if (!user) return null;
    return user;
  },
  async findById(id: string) {
    const user: UserI | null = await UserModel.findById({ _id: new Types.ObjectId(id) }).select('-password');
    if (!user) return null;
    return user;
  }

}