import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

const db = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI);
    await mongoose.connect(`${db}`);
    console.log("DB connected!");
  } catch (error) {
    console.log("Error connecting to DB", error.message);
    process.exit(1);
  }
};

// conn.connection.host
