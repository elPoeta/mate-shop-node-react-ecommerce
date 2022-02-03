import { Request, Response } from "express"

export const getUsers = (req: Request, res: Response) => {

  res.status(200).json([{ email: 'leonardo.a.tosetto@gmail.com' }]);
};