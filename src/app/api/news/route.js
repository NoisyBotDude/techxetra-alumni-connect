import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import News from '../../../models/News';

export async function GET() {
  try {
    await connectToDatabase();
    // const newsItems = await News.find().sort({ date: -1 });
    const newsItems = await News.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'authorIds',
          foreignField: 'userId',
          as: 'authors'
        }
      },
      {
        $project: {
          title: 1,
          description: 1,
          date: 1,
          content: 1,
          imageUrl: 1,
          tags: 1,
          size: 1,
          createdAt: 1,
          authors: { userId: 1, firstName: 1, lastName: 1, email: 1 }
        }
      }
    ]);
    return NextResponse.json(newsItems, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to retrieve news items', error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const newsItem = new News(body);
    await newsItem.save();
    return NextResponse.json(newsItem, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create news item', error: error.message }, { status: 400 });
  }
}