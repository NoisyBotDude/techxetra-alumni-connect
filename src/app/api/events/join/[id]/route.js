import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../../lib/mongodb';
import Event from '../../../../../models/Event';
import User from '../../../../../models/User';

export async function POST(req, { params }) {
    try {
      await connectToDatabase();
      const { id } = await params;
      const { userId, status } = await req.json();
  
      const event = await Event.findOneAndUpdate(
        { eventId: id },
        {
          $addToSet: {
            attendees: { userId, status },
          },
        },
        { new: true }
      );
  
      if (!event) {
        return NextResponse.json({ message: 'Event not found' }, { status: 404 });
      }
  
      return NextResponse.json({ message: `User ${status} for event`, event }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Error joining event', error: error.message }, { status: 500 });
    }
  }