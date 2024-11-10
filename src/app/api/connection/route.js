import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Connection from '../../../models/Connection';

export async function POST(req) {
    await connectToDatabase();
    const { senderId, receiverId, action } = await req.json();

    const sender = await User.findOne({ userId: senderId });
    const receiver = await User.findOne({ userId: receiverId });

    if (!sender || !receiver) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    switch (action) {
        case 'send':
            await receiver.updateOne({ $push: { connections: { userId: senderId, status: 'PENDING' } } });
            await sender.updateOne({ $push: { connections: { userId: receiverId, status: 'PENDING' } } });
            return NextResponse.json({ message: 'Connection request sent' }, { status: 201 });

        case 'cancel':
            await receiver.updateOne({ $pull: { connections: { userId: senderId, status: 'PENDING' } } });
            await sender.updateOne({ $pull: { connections: { userId: receiverId, status: 'PENDING' } } });
            return NextResponse.json({ message: 'Connection request canceled' }, { status: 200 });

        case 'accept':
            await receiver.updateOne({ 'connections.userId': senderId }, { $set: { 'connections.$.status': 'CONNECTED' } });
            await sender.updateOne({ 'connections.userId': receiverId }, { $set: { 'connections.$.status': 'CONNECTED' } });
            return NextResponse.json({ message: 'Connection accepted' }, { status: 200 });

        case 'reject':
            await receiver.updateOne({ 'connections.userId': senderId }, { $set: { 'connections.$.status': 'REJECTED' } });
            await sender.updateOne({ 'connections.userId': receiverId }, { $set: { 'connections.$.status': 'REJECTED' } });
            return NextResponse.json({ message: 'Connection rejected' }, { status: 200 });

        default:
            return NextResponse.json({ message: 'Invalid action' }, { status: 400 });
    }
}

export async function PUT(req) {
    await connectToDatabase();
    const { connectionId, action } = await req.json();

    const connection = await Connection.findOne({ connectionId });
    if (!connection) {
        return NextResponse.json({ message: 'Connection not found' }, { status: 404 });
    }

    connection.status = action === 'accept' ? 'ACCEPTED' : 'REJECTED';
    connection.updatedAt = new Date();
    await connection.save();

    return NextResponse.json(connection, { status: 200 });
}