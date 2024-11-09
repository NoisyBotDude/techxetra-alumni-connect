// pages/api/user/add-info.js
import connectToDatabase from '../../../lib/mongodb';
import User from '../../../models/User';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { user_id, ...additionalInfo } = req.body;

    try {
      const user = await User.findOneAndUpdate(
        { email },
        { $set: additionalInfo },
        { new: true, upsert: true } // Creates a new user if one doesn't exist
      );

      res.status(200).json({ message: 'User information updated successfully', user });
    } catch (error) {
      console.error("Error updating user information:", error);
      res.status(500).json({ message: 'Error updating user information', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}