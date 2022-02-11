import { UserI } from '@interfaces/user';
import { UserRepository } from '@repository/userRepository';
export interface UserServiceI {
  createNewUser(userParam: UserI): Promise<UserI>;
  findByEmail(email: string): Promise<UserI>;
}

export const UserService: UserServiceI = {
  async createNewUser(userParam: UserI) {
    return await UserRepository.createNewUser(userParam);
  },
  async findByEmail(email: string) {
    return await UserRepository.findByEmail(email);
  }
}