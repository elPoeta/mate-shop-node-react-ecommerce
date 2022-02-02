import mongoose from "mongoose";
import config from './envConf';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.log(`MongoDB Error Connection: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;