import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import Event from '../../../../models/Event';
import User from '../../../../models/User';

export async function GET() {
    try {
      await connectToDatabase();
      const upcomingEvents = await Event.aggregate([
        {
          $match: { date: { $gte: new Date() } },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'attendees.userId',
            foreignField: 'userId',
            as: 'attendeeDetails',
          },
        },
      ]);
      return NextResponse.json(upcomingEvents, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Error retrieving upcoming events', error: error.message }, { status: 500 });
    }
  }