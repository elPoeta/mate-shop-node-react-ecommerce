import { UserI } from '@interfaces/user';
import { UserRepository } from '@repository/userRepository';
export interface UserServiceI {
  createNewUser(userParam: UserI): Promise<UserI>;
  findByEmail(email: string): Promise<UserI | null>;
}

export const UserService: UserServiceI = {
  async createNewUser(userParam: UserI) {
    return await UserRepository.createNewUser(userParam);
  },
  async findByEmail(email: string): Promise<UserI | null> {
    return await UserRepository.findByEmail(email);
  }
}