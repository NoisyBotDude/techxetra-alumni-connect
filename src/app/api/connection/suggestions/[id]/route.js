import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../../lib/mongodb';
import Connection from '../../../../../models/Connection';
import User from '../../../../../models/User';

export async function GET(req, { params }) {
    await connectToDatabase();
    const { id } = await params;

    const user = await User.aggregate([
        { $match: { userId: id } },
        {
            $lookup: {
                from: 'users',
                localField: 'connections.userId',
                foreignField: 'userId',
                as: 'suggestedConnections',
            },
        },
        {
            $project: {
                suggestedConnections: {
                    userId: 1,
                    firstName: 1,
                    lastName: 1,
                    role: 1,
                    followers: 1,
                    posts: 1,
                    profileImage: 1,
                },
            },
        },
    ]);

    return NextResponse.json(user[0], { status: 200 });
}