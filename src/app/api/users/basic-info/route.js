// pages/api/user/update-basic-info.js
import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import User from '../../../../models/User';

export async function POST(req) {
  try {
    await connectToDatabase();
    const { userId, age, experience, ctc, location, phone, email } = await req.json();

    // Update the user information
    const updatedUser = await User.findOneAndUpdate(
      { userId },
      { age, experience, ctc, location, phone, email },
      { new: true }
    );

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("Error updating user information:", error);
    return NextResponse.json({ message: "Error updating user information", error: error.message }, { status: 500 });
  }
}