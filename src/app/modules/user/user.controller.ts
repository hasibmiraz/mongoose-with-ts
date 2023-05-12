import { Request, Response } from 'express';
import { createUserToDB, getUsersFromDB } from './user.service';

export const createUser = async (req: Request, res: Response) => {
  const user = await createUserToDB();
  return res.status(200).json({
    status: 'success',
    data: user,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDB();
  return res.status(200).json({
    status: 'success',
    data: users,
  });
};
