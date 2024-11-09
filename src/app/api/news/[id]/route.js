import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import News from '../../../../models/News';

export async function GET(req, { params }) {
  try {
    await connectToDatabase();
    const { id } =  await params;

    const newsItem = await News.findOne({ newsId: id });
    if (!newsItem) {
      return NextResponse.json({ message: 'News item not found' }, { status: 404 });
    }
    return NextResponse.json(newsItem, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error retrieving news item', error: error.message }, { status: 500 });
  }
}