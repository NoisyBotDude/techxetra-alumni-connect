import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../../lib/mongodb';
import News from '../../../../../models/News';

export async function GET(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;

    // Find the current news item to get its tags and type
    const currentNews = await News.findOne({ newsId: id });
    if (!currentNews) {
      return NextResponse.json({ message: 'News item not found' }, { status: 404 });
    }

    // Aggregate to find suggestions based on tags and type
    const suggestions = await News.aggregate([
      {
        $match: {
          newsId: { $ne: id },
          tags: { $in: currentNews.tags },
          type: currentNews.type,
        },
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
          type: 1,
          imageUrl: 1,
          tags: 1,
          authors: { userId: 1, name: 1, email: 1 }, // Include only necessary fields from User
        },
      },
      {
        $limit: 5, // Limit the number of suggestions
      },
    ]);

    return NextResponse.json(suggestions, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to retrieve suggestions', error: error.message }, { status: 500 });
  }
}