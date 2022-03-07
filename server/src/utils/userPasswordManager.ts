import * as argon2 from 'argon2';

export const matchPassword = async (enteredPassword: string, password: string): Promise<boolean> => {
  console.log('VIRIFY MATCH #############');
  try {
    const match: boolean = await argon2.verify(password, enteredPassword);
    console.log('VIRIFY MATCH', match);
    return match;
  } catch (err) {
    console.log('VIRIFY MATCH ERROR ', err);
    return false;
  }
};