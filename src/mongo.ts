import { MongoClient, MongoClientOptions } from "mongodb";

// MongoDB connection string from environment variable
const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Optional MongoClient options
const options: MongoClientOptions = {
  // Avoid reconnecting unnecessarily
  maxPoolSize: 10, // Conservative pool size to avoid exhausting connections
  minPoolSize: 0,
  // Help with idle timeouts in serverless
  serverSelectionTimeoutMS: 5000, // Shorter selection time
  socketTimeoutMS: 10000, // Fail fast if idle
  // Keep alive helps prevent dropped connections (optional)
  keepAliveInitialDelay: 300000,
  // Optional: Force new connection every time (not recommended unless debugging)
  // forceServerObjectId: true,
};

let cachedClient: MongoClient | null = null;

/**
 * Returns a shared MongoClient instance.
 * Caches the connection across Lambda invocations if warm.
 */
export async function getMongoClient(): Promise<MongoClient> {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri, options);
  await client.connect();

  cachedClient = client;
  return client;
}

/**
 * Shortcut to get DB object.
 * @param dbName Optional database name, defaults to 'testDB'
 */
export async function getMongoDb(dbName = "testDB") {
  const client = await getMongoClient();
  return client.db(dbName);
}
