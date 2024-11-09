// pages/api/users/[id].js
import connectToDatabase from '../../../lib/mongodb';
import User from '../../../models/User';

export default async function handler(req, res) {
  await connectToDatabase();

  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const user = await User.findOne({userId: id});
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving user', error: error.message });
    }
  } else if (req.method === 'PUT') {
    try {
      const updatedUser = await User.findOneAndUpdate({userId: id}, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(400).json({ message: 'Error updating user', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}