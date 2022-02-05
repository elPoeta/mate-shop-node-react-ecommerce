import { User } from '@interfaces/user';
import { AuthRepository } from '@repository/authRepository';
export interface AuthServiceI {
  createNewUser(userParam: User): Promise<User>;
}

export const AuthService: AuthServiceI = {
  async createNewUser(userParam: User) {
    return await AuthRepository.createNewUser(userParam);
  }
}