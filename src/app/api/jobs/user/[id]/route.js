// pages/api/jobs/user/[userId].js
import { NextResponse } from 'next/server';
import dbConnect from '../../../../../lib/mongodb';
import Job from '@/models/Job';

export async function GET(req, { params }) {
  await dbConnect();
  const { id } = await params;

  try {
    const jobs = await Job.find({ postedBy: userId });
    return NextResponse.json({ jobs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs for user:", error);
    return NextResponse.json({ message: "Failed to fetch jobs for user" }, { status: 500 });
  }
}