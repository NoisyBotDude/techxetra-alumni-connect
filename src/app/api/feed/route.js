// pages/api/feed.js
import dbConnect from "../../../lib/mongodb";
import News from "@/models/News";
import Event from "@/models/Event";
import Job from "@/models/Job";
import Content from "@/models/Content";
import { NextResponse } from 'next/server';

export async function GET(req) {
  await dbConnect();

  try {
    // Fetch random documents from each collection
    const newsData = await News.aggregate([{ $sample: { size: 5 } }]); // 5 random news items
    const eventsData = await Event.aggregate([{ $sample: { size: 5 } }]); // 5 random events
    const jobsData = await Job.aggregate([{ $sample: { size: 5 } }]); // 5 random jobs
    const postsData = await Content.aggregate([{ $sample: { size: 5 } }]); // 5 random posts

    // Combine and shuffle feed items
    const feedData = [...newsData, ...eventsData, ...jobsData, ...postsData].sort(() => Math.random() - 0.5);

    return NextResponse.json({ feedData }, { status: 200 });
  } catch (error) {
    console.error("Error fetching feed data:", error);
    return NextResponse.json({ message: "Failed to fetch feed data" }, { status: 500 });
  }
}