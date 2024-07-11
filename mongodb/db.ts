import mongoose from "mongoose";

const connectionString = `mongodb+srv://jonosuave:${process.env.MONGO_DB_PASSWORD}@serveractionsdemo.vazxhnu.mongodb.net/?retryWrites=true&w=majority&appName=serverActionsDemo`;

if (!connectionString) {
  throw new Error("MongoDB connection string is required");
}

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
      return;
    }   

    try {
        await mongoose.connect(connectionString);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed", error);
    }
};

export default connectDB;