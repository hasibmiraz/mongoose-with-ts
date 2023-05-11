import express, { Application, Response, Request } from 'express';
import cors from 'cors';
import { User } from './app/modules/user/user.model';

const app: Application = express();

// use cors
app.use(cors());

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response) => {
  // inserting test data into mongodb

  const createUserToDB = async () => {
    const user = new User({
      id: '123',
      role: 'student',
      name: {
        firstName: 'Hasib',
        middleName: 'Miraz',
        lastName: 'Miraz',
      },
      dateOfBirth: '4 March, 1998.',
      gender: 'male',
      email: 'miraz@email.com',
      contactNo: '01264244',
      emergencyContactNo: '0147852',
      presentAddress: '162/ 1 North goran',
      permanentAddress: 'Same',
    });

    await user.save();
  };

  await createUserToDB();

  return res.status(200).json('Successful');
});

export default app;
