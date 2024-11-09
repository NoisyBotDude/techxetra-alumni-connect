// pages/api/users/index.js
import connectToDatabase from '../../../lib/mongodb';
import User from '../../../models/User';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const user = new User(body);
    const savedUser = await user.save();
    return NextResponse.json({ user: savedUser }, { status: 201 });
  } catch (error) {
    console.error('Error saving user:', error);
    return NextResponse.json(new Error('Error saving user'), { status: 500 });
  }
}