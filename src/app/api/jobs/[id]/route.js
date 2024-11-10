// pages/api/jobs/[jobId].js
import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import Job from '@/models/Job';

export async function GET(req, { params }) {
  await dbConnect();
  const { id } = await params;

  try {
    const job = await Job.findOne({ jobId });
    if (!job) return NextResponse.json({ message: "Job not found" }, { status: 404 });
    
    return NextResponse.json({ job }, { status: 200 });
  } catch (error) {
    console.error("Error fetching job:", error);
    return NextResponse.json({ message: "Failed to fetch job" }, { status: 500 });
  }
}