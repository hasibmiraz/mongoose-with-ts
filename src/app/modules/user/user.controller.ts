import { Request, Response } from 'express';
import {
  createUserToDB,
  getAdminUsersFromDB,
  getUserByIdFromDB,
  getUsersFromDB,
} from './user.service';

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;

  const user = await createUserToDB(data);
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

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);
  return res.status(200).json({
    status: 'success',
    data: user,
  });
};

export const getAdminUser = async (req: Request, res: Response) => {
  const user = await getAdminUsersFromDB();
  return res.status(200).json({
    status: 'success',
    data: user,
  });
};
