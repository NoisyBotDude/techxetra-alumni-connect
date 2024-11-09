import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../../lib/mongodb';
import News from '../../../../../models/News';

export async function GET(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = await params; // `id` now represents `authorId`

    const newsItems = await News.aggregate([
      {
        $match: { authorIds: id }, // Match news items where `authorIds` includes the specified `authorId`
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

    if (!newsItems || newsItems.length === 0) {
      return NextResponse.json({ message: 'No news items found for this author' }, { status: 404 });
    }

    return NextResponse.json(newsItems, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error retrieving news items', error: error.message }, { status: 500 });
  }
}