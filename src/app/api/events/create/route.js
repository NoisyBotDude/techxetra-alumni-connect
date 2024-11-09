import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import Event from '../../../../models/Event';
import User from '../../../../models/User';

export async function POST(req) {
    try {
      await connectToDatabase();
      const { title, type, format, featured, description, date, location, timezone } = await req.json();
  
      const newEvent = await Event.create({
        title,
        type,
        format,
        featured,
        description,
        date,
        location,
        timezone,
        attendees: [],
      });
  
      return NextResponse.json(newEvent, { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: 'Error creating event', error: error.message }, { status: 500 });
    }
  }