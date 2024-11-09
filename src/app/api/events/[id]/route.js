import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import Event from '../../../../models/Event';
import User from '../../../../models/User';

export async function GET(req, { params }) {
    try {
      await connectToDatabase();
      const { id } = await params;
  
      const myPastEvents = await Event.aggregate([
        {
          $match: {
            eventId: id,
          },
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
      return NextResponse.json(myPastEvents, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Error retrieving user\'s past events', error: error.message }, { status: 500 });
    }
  }

  export async function PUT(req, { params }) {
    try {
      await connectToDatabase();
      const { id } = await params;
      const updateData = await req.json();
  
      const updatedEvent = await Event.findOneAndUpdate(
        { eventId: id },
        { $set: updateData },
        { new: true }
      );
  
      if (!updatedEvent) {
        return NextResponse.json({ message: 'Event not found' }, { status: 404 });
      }
  
      return NextResponse.json(updatedEvent, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Error updating event', error: error.message }, { status: 500 });
    }
  }