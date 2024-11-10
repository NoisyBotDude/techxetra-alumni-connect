// pages/api/jobs/index.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Job from '@/models/Job';

export async function GET() {
  await dbConnect();
  
  try {
    const jobs = await Job.find({});
    return NextResponse.json({ jobs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ message: "Failed to fetch jobs" }, { status: 500 });
  }
}