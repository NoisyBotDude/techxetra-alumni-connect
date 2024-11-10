// src/pages/api/user/update-skills.js
import connectToDatabase from "../../../lib/mongodb";
import User from "../../../models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDatabase();
    const { userId, skills } = await req.json();
    console.log("userId:", userId);

    const updatedUser = await User.findOneAndUpdate(
      { userId },
      { skills },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Skills updated successfully" }, { status: 200 });
  } catch (error) {
    console.log("Error updating skills:", error);
    return NextResponse.json({ message: "Error updating skills", error: error.message }, { status: 500 });
  }
}