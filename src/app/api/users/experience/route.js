import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import User from '../../../../models/User';

export async function POST(req) {
  try {
    await connectToDatabase();
    const { userId, experience } = await req.json();

    const updatedUser = await User.findOneAndUpdate(
      { userId },
      { $push: { professionalJourney: experience } },
      { new: true }
    );

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error('Error adding experience:', error);
    return NextResponse.json({ message: 'Failed to add experience', error: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectToDatabase();
    const { userId, experienceId, updatedExperience } = await req.json();

    const updatedUser = await User.findOneAndUpdate(
      { userId, 'professionalJourney._id': experienceId },
      { $set: { 'professionalJourney.$': updatedExperience } },
      { new: true }
    );

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update experience', error: error.message }, { status: 500 });
  }
}