import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import News from '../../../../models/News';

export async function GET(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = await params;

    const newsItem = await News.aggregate([
      { $match: { newsId: id } },
      {
        $lookup: {
          from: 'comments',
          let: { newsId: '$newsId' },
          pipeline: [
            { $match: { $expr: { $and: [{ $eq: ['$targetId', '$$newsId'] }, { $eq: ['$targetType', 'news'] }] } } },
          ],
          as: 'comments',
        },
      },
      {
        $lookup: {
          from: 'likes',
          let: { newsId: '$newsId' },
          pipeline: [
            { $match: { $expr: { $and: [{ $eq: ['$targetId', '$$newsId'] }, { $eq: ['$targetType', 'news'] }] } } },
          ],
          as: 'likes',
        },
      },
      {
        $lookup: {
          from: 'shares',
          let: { newsId: '$newsId' },
          pipeline: [
            { $match: { $expr: { $and: [{ $eq: ['$targetId', '$$newsId'] }, { $eq: ['$targetType', 'news'] }] } } },
          ],
          as: 'shares',
        },
      },
      {
        $lookup: {
          from: 'reposts',
          let: { newsId: '$newsId' },
          pipeline: [
            { $match: { $expr: { $and: [{ $eq: ['$targetId', '$$newsId'] }, { $eq: ['$targetType', 'news'] }] } } },
          ],
          as: 'reposts',
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
          commentsCount: { $size: "$comments" },
          likesCount: { $size: "$likes" },
          sharesCount: { $size: "$shares" },
          repostsCount: { $size: "$reposts" },
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