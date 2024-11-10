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
    // Fetch random documents from each collection and add _typename
    const newsData = await News.aggregate([{ $sample: { size: 5 } }]).then(docs => 
      docs.map(doc => ({ ...doc, _typename: "News" }))
    );
    const eventsData = await Event.aggregate([{ $sample: { size: 5 } }]).then(docs => 
      docs.map(doc => ({ ...doc, _typename: "Event" }))
    );
    const jobsData = await Job.aggregate([{ $sample: { size: 5 } }]).then(docs => 
      docs.map(doc => ({ ...doc, _typename: "Job" }))
    );
    const postsData = await Content.aggregate([{ $sample: { size: 5 } }]).then(docs => 
      docs.map(doc => ({ ...doc, _typename: "Post" }))
    );

    // Combine and shuffle feed items
    const feedData = [...newsData, ...eventsData, ...jobsData, ...postsData].sort(() => Math.random() - 0.5);

    return NextResponse.json({ feedData }, { status: 200 });
  } catch (error) {
    console.error("Error fetching feed data:", error);
    return NextResponse.json({ message: "Failed to fetch feed data" }, { status: 500 });
  }
}