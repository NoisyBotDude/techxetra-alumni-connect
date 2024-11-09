import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import Event from '../../../../models/Event';
import User from '../../../../models/User';

export async function GET() {
    try {
      await connectToDatabase();
      const pastEvents = await Event.aggregate([
        {
          $match: { date: { $lt: new Date() } },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'attendees.userId',
            foreignField: 'userId',
            as: 'attendeeDetails',
          },
        },
        { $sort: { date: -1 } },
      ]);
      return NextResponse.json(pastEvents, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Error retrieving past events', error: error.message }, { status: 500 });
    }
  }