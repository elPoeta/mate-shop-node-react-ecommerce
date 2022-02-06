import { User } from '@interfaces/user';
import { UserRepository } from '@repository/userRepository';
export interface UserServiceI {
  createNewUser(userParam: User): Promise<User>;
}

export const UserService: UserServiceI = {
  async createNewUser(userParam: User) {
    return await UserRepository.createNewUser(userParam);
  }
}