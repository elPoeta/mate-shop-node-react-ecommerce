import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async () => {
  try {
    const MONGO_URI = JSON.stringify(process.env.MONGO_URI).replace("\"", '');
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.log(`MongoDB Error Connection: ${error.message}`);
    process.exit(1);
  }
};

connectDB();