import mongoose from 'mongoose';
import app from './app';

const port: number = 5000;

// DB Connection
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-test');
    console.log(`DB connection successful`);
    app.listen(port, () => {
      console.log(`Server app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
