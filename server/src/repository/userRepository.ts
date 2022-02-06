import UserModel from '@models/user';
import { User, UserDocument } from '@interfaces/user';
export interface UserRepositoryI {
  createNewUser(userParam: User): Promise<User>;
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
  }
}