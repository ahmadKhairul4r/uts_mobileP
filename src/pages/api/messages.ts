// pages/api/messages.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from "../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_NAME);

  switch (req.method) {
    case "POST":
      try {
        const body = JSON.parse(req.body);
        
        // Validate request body
        if (typeof body !== "object") {
          throw new Error('Invalid request');
        }
        
        if (!body.name || !body.email || !body.subject || !body.messagee) {
          throw new Error('All fields are required');
        }

        // Insert data into the "messages" collection
        const myMessage = await db.collection("messages").insertOne(body);
        res.status(201).json({ data: myMessage });
      } catch (err) {
        res.status(422).json({ message: err.message });
      }
      break;

    case "GET":
      try {
        // Fetch all records from the "messages" collection
        const allMessages = await db.collection("messages").find({}).toArray();
        res.status(200).json({ data: allMessages });
      } catch (err) {
        res.status(500).json({ message: 'Error fetching data' });
      }
      break;

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}