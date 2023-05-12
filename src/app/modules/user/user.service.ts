import User from './user.model';

export const createUserToDB = async () => {
  const user = new User({
    id: '126',
    role: 'student',
    password: 'Password',
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

  return user;
};

export const getUsersFromDB = async () => {
  const users = await User.find();

  return users;
};
