import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import Connection from '../../../../models/Connection';

export async function GET(req, { params }) {
    await connectToDatabase();
    const { id } = await params;

    const connections = await Connection.aggregate([
        {
            $match: {
                $or: [{ senderId: id }, { receiverId: id }],
                status: 'ACCEPTED'
            }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'senderId',
                foreignField: 'userId',
                as: 'sender'
            }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'receiverId',
                foreignField: 'userId',
                as: 'receiver'
            }
        },
        {
            $project: {
                connectionId: 1,
                status: 1,
                createdAt: 1,
                updatedAt: 1,
                sender: { $arrayElemAt: ['$sender', 0] },
                receiver: { $arrayElemAt: ['$receiver', 0] },
            }
        }
    ]);

    return NextResponse.json(connections, { status: 200 });
}