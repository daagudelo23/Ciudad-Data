import mongoose from 'mongoose';
import config from './env';

export async function connectDB() {
  if (!config.mongoUri) {
    throw new Error('MONGODB_URI no está configurado');
  }
  await mongoose.connect(config.mongoUri);
}
