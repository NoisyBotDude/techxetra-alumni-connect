import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Like from '../../../models/Like';
import Comment from '../../../models/Comment';
import Share from '../../../models/Share';
import Repost from '../../../models/Repost';

export async function POST(req) {
  const { userId, targetId, targetType, actionType, commentText, message } = await req.json();
  await connectToDatabase();

  try {
    switch (actionType) {
      case 'like':
        // Toggle like: if it exists, unlike; if not, like
        const existingLike = await Like.findOne({ userId, targetId, targetType });
        if (existingLike) {
          await Like.deleteOne({ _id: existingLike._id });
          return NextResponse.json({ message: 'Unliked successfully' });
        }
        await Like.create({ userId, targetId, targetType });
        return NextResponse.json({ message: 'Liked successfully' });

      case 'comment':
        await Comment.create({ userId, targetId, targetType, commentText });
        return NextResponse.json({ message: 'Comment added successfully' });

      case 'share':
        await Share.create({ userId, targetId, targetType, message });
        return NextResponse.json({ message: 'Shared successfully' });

      case 'repost':
        await Repost.create({ userId, targetId, targetType });
        return NextResponse.json({ message: 'Reposted successfully' });

      default:
        return NextResponse.json({ message: 'Invalid action type' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Failed to process action', error: error.message }, { status: 500 });
  }
}