import * as argon2 from 'argon2';

export const matchPassword = async function (enteredPassword: string, password: string): Promise<boolean> {
  try {
    return await argon2.verify(password, enteredPassword);
  } catch (err) {
    return false;
  }
};