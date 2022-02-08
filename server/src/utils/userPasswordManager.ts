import * as bcrypt from 'bcryptjs';

export const matchPassword = async function (enteredPassword: string, password: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, password);
};