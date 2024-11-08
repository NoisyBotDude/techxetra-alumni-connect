// pages/api/users/index.js
import connectToDatabase from '../../../lib/mongodb';
import User from '../../../models/User';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const user = new User(req.body);
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(400).json({ message: 'Error creating user', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}