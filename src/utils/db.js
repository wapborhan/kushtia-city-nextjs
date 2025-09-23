import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!DB_NAME) {
  throw new Error(
    "Please define the DB_NAME environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: DB_NAME,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log("✅ Successfully connected to MongoDB!");

        return mongoose;
      })
      .catch((err) => {
        console.error("❌ Failed to connect to MongoDB:", err);
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("❌ Connection error:", e);
    throw e;
  }

  return cached.conn;
}

export { connectDatabase };
