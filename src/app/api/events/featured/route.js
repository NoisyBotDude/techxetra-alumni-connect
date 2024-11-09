import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import Event from '../../../../models/Event';
import User from '../../../../models/User';

export async function GET() {
    try {
      await connectToDatabase();
      const featuredEvents = await Event.aggregate([
        {
          $match: { date: { $lt: new Date() }, featured: true },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'attendees.userId',
            foreignField: 'userId',
            as: 'attendeeDetails',
          },
        },
        { $sort: { date: -1 } }, // Sort by the most recent past events
        { $limit: 5 }, // Limit to top 5 featured events
      ]);
      return NextResponse.json(featuredEvents, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Error retrieving featured events', error: error.message }, { status: 500 });
    }
  }