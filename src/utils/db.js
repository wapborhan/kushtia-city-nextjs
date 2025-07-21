import { MongoClient } from "mongodb";

let client;
let db;

async function connectDatabase() {
  if (!process.env.MONGODB_URI || !process.env.DB_NAME) {
    throw new Error("Missing environment variables: MONGODB_URI or DB_NAME");
  }

  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect(); // <-- Should work if MongoDB URI is good
    console.log("✅ Connected to MongoDB");
  }

  if (!db) {
    db = client.db(process.env.DB_NAME);
  }

  return db;
}

export { connectDatabase };
