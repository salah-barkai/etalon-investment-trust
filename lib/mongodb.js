import { MongoClient } from 'mongodb'

// Cached across warm serverless invocations so we don't open a new
// connection on every request (recommended pattern for Vercel + MongoDB).
let clientPromise = globalThis._etalonMongoClientPromise

function getClientPromise() {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable')
  }

  if (!clientPromise) {
    const client = new MongoClient(uri)
    clientPromise = client.connect()
    globalThis._etalonMongoClientPromise = clientPromise
  }

  return clientPromise
}

export async function getDb() {
  const client = await getClientPromise()
  return client.db(process.env.MONGODB_DB || 'etalon_investment')
}
