import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_CONNECTION = process.env.MONGO_CONNECTION;
const client = new MongoClient(MONGO_CONNECTION);

export let db;

export async function connectToDB() {
  try {
    await client.connect();
    db = client.db('sample_mflix');

    await ensureCollections();

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

async function ensureCollections() {
  const neededCollections = ['persons'];

  const collections = await db.listCollections().toArray();
  const collectionNames = collections.map(col => col.name);
  console.log(collectionNames);

  for (const collName of neededCollections) {
    if (!collectionNames.includes(collName)) {
      try {
        await db.createCollection(collName);
        console.log(`Collection ${collName} created.`)
      } catch (err) {
        console.error(`Error creating collection ${collName}:`, err);
        throw err;
      }
    }
  }

}