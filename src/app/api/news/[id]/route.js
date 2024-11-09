import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import News from '../../../../models/News';

export async function GET(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = await params;

    const newsItem = await News.aggregate([
      {
        $match: { newsId: id },
      },
      {
        $lookup: {
          from: 'users',               // MongoDB collection name for the User model
          localField: 'authorIds',     // Field in News containing userId values
          foreignField: 'userId',      // Field in User that matches authorIds
          as: 'authors',               // Output field for matched User documents
        },
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
          authors: { userId: 1, name: 1, email: 1 }, // Include only necessary fields from User
        },
      },
    ]);

    if (!newsItem || newsItem.length === 0) {
      return NextResponse.json({ message: 'News item not found' }, { status: 404 });
    }

    return NextResponse.json(newsItem[0], { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error retrieving news item', error: error.message }, { status: 500 });
  }
}