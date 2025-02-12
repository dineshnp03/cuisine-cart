import mongoose from "mongoose";

// connection string is from the .env variable
const MONGODB_URI = process.env.MONGODB_URI || "";

// Checking if connection string is provided in the .env file
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing in .env.local");
}

// MongoDB connection function
export const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to MongoDB");
    return mongoose.connections[0];  // to use the existing connection if exists
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Successfully connected to MongoDB");
    return mongoose.connections[0];
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);  
  }
};
