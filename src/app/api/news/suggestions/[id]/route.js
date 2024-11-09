import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import News from '../../../models/News';

export async function GET(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = await params;

    // Find the current news item to get its tags and type
    const currentNews = await News.findOne({ newsId: id });
    if (!currentNews) {
      return NextResponse.json({ message: 'News item not found' }, { status: 404 });
    }

    // Fetch related news based on tags and type, excluding the current news item
    const suggestions = await News.find({
      newsId: { $ne: newsId },
      tags: { $in: currentNews.tags },
      type: currentNews.type,
    }).limit(5); // Limit the number of suggestions

    return NextResponse.json(suggestions, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to retrieve suggestions', error: error.message }, { status: 500 });
  }
}