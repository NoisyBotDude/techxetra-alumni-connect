import connectToDatabase from '../../../../lib/mongodb';
import User from '../../../../models/User';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await connectToDatabase();
    const { userId, firstName, lastName, bio, currentRole } = await req.json();

    const updatedData = {
      firstName,
      lastName,
      bio,
      "professionalJourney.currentRole": currentRole,
    };

    const result = await User.updateOne({ userId }, { $set: updatedData });

    if (result.nModified === 0) {
      return NextResponse.json({ message: 'No changes made or user not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'User information updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating user information:', error);
    return NextResponse.json({ message: 'Error updating user information', error: error.message }, { status: 500 });
  }
}