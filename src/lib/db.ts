import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) throw new Error("MONGODB_URI is missing in .env.local");

global.mongooseCache = global.mongooseCache || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (global.mongooseCache.conn) return global.mongooseCache.conn;

  global.mongooseCache.promise = mongoose.connect(MONGODB_URI, {
    dbName: "myDatabase",
  });

  global.mongooseCache.conn = await global.mongooseCache.promise;
  return global.mongooseCache.conn;
};