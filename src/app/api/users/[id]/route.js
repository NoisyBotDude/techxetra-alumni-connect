import connectToDatabase from '../../../../lib/mongodb';
import User from '../../../../models/User';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    await connectToDatabase();
    
    const id = (await params).id;
    
    try {
        const user = await User.findOne({ userId: id });
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
        return NextResponse.json({user: user}, { status: 200 });
    } catch (error) {
        console.error('Error retrieving user:', error);
        return NextResponse.json({ message: 'Error retrieving user', error: error.message }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    await connectToDatabase();
    
    const id = (await params).id;

    const body = await req.json();
    
    try {
        const updatedUser = await User.findOneAndUpdate({ userId: id, }, body, { new: true });
        if (!updatedUser) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ user: updatedUser }, { status: 200 });
    } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json({ message: 'Error updating user', error: error.message }, { status: 400 });
    }
}