import * as jwt from 'jsonwebtoken';
import config from "@config/envConf";
import { User } from "@interfaces/user";
import { ErrorResponse } from "@utils/errorRespnse";


export const generateAuthToken = (user: User): string => {
  try {
    console.log('EXP TOKE', config.JWT_EXPIRE)
    return jwt.sign(
      {
        id: user.ID,
        isAdmin: user.isAdmin,
        iat: new Date().getTime(),
        expiresIn: config.JWT_EXPIRE
      },
      config.JWT_SECRET
    );
  } catch (err) {
    throw new ErrorResponse("unauthorized", 401);
  }
}