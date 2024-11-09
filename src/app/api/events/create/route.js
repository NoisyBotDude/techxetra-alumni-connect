import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import Event from '../../../../models/Event';
import User from '../../../../models/User';

export async function POST(req) {
    try {
      await connectToDatabase();
      const { title, type, format, featured, description, date, location, timezone, time } = await req.json();
      console.log(time)

      const [hours, minutes] = time.split(":").map(Number); // Parse the "04:04" format
      const startTime = new Date(date);

      startTime.setHours(hours);
      startTime.setMinutes(minutes);
  
      const newEvent = await Event.create({
        title,
        type,
        format,
        featured: featured === "yes" ? true : false,
        description,
        date,
        time: {
          start: startTime
        },
        location,
        timezone,
        attendees: [],
      });
  
      return NextResponse.json(newEvent, { status: 201 });
    } catch (error) {
      console.error('Error creating event:', error);
      return NextResponse.json({ message: 'Error creating event', error: error.message }, { status: 500 });
    }
  }