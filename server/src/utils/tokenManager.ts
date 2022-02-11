import * as jwt from 'jsonwebtoken';
import config from "@config/envConf";
import { UserI } from "@interfaces/user";
import { ErrorResponse } from "@utils/errorRespnse";


export const generateAuthToken = (user: UserI): string => {
  try {
    return jwt.sign(
      {
        id: user._id,
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