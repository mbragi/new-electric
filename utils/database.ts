import mongoose, { ConnectOptions } from 'mongoose';

let isConnected = false;
export async function connectToDB() {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('DB is already connected');
    return;
  }
  let URI = process.env.MONGO_URI ?? '';
  try {
    const options: ConnectOptions = {
      dbName:"packmyload"
    };

    await mongoose.connect(URI, options);

    isConnected = true;
    console.log('DB connected');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}
