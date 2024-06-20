import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(error);
  }
};

export default connectToMongoDB;
