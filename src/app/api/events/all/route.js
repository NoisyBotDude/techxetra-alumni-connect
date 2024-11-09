import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import Event from '../../../../models/Event';
import User from '../../../../models/User';

export async function GET() {
    try {
      await connectToDatabase();
      const events = await Event.aggregate([
        {
          $lookup: {
            from: 'users',
            localField: 'attendees.userId',
            foreignField: 'userId',
            as: 'attendeeDetails',
          },
        },
      ]);
      return NextResponse.json(events, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Error retrieving events', error: error.message }, { status: 500 });
    }
  }