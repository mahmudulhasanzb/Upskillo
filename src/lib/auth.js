import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('upskillodb');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});













//  socialProviders: {
//     google: {
//       clientId: process.env.Google_CLIENT_ID,
//       clientSecret: process.env.Google_CLIENT_SECRET,
//     },