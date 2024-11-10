import connectToDatabase from '../../../../lib/mongodb';
import User from '../../../../models/User';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    await connectToDatabase();
    
    const id = (await params).id;
    
    try {
        const userData = await User.aggregate([
            { $match: { userId: id } }, // Match the user by userId
            // Lookup for Events RSVP
            {
              $lookup: {
                from: 'events', // Collection name for events
                localField: 'eventsRSVP.eventId',
                foreignField: 'eventId',
                as: 'eventsRSVPDetails',
              },
            },
            // Lookup for Job Postings
            {
              $lookup: {
                from: 'jobs', // Collection name for jobs
                localField: 'jobPostings.jobId',
                foreignField: 'jobId',
                as: 'jobPostingsDetails',
              },
            },
            // Lookup for Content Contributions
            {
              $lookup: {
                from: 'contents', // Collection name for contents
                localField: 'contentContributions.contentId',
                foreignField: 'contentId',
                as: 'contentContributionsDetails',
              },
            },
            // Project necessary fields
            {
              $project: {
                userId: 1,
                firstName: 1,
                lastName: 1,
                email: 1,
                description: 1,
                profileImage: 1,
                bio: 1,
                skills: 1,
                interests: 1,
                professionalJourney: 1,
                socialLinks: 1,
                isMentor: 1,
                role: 1,
                profileStats: 1,
                createdAt: 1,
                donations: 1,
                followers: 1,
                posts: 1,
                connections: 1,
                age: 1,
                experience: 1,
                ctc: 1,
                location: 1,
                phone: 1,
                // Include details from lookups
                eventsRSVPDetails: {
                    $map: {
                        input: "$eventsRSVPDetails",
                        as: "event",
                        in: {
                            eventId: "$$event._id",
                            title: "$$event.title",
                            date: "$$event.date",
                            location: "$$event.location"
                        }
                    }
                },
                jobPostingsDetails: {
                    $map: {
                        input: "$jobPostingsDetails",
                        as: "job",
                        in: {
                            jobId: "$$job._id",
                            title: "$$job.title",
                            company: "$$job.company",
                            location: "$$job.location",
                            createdAt: "$$job.createdAt"
                        }
                    }
                },
                contentContributionsDetails: {
                    $map: {
                        input: "$contentContributionsDetails",
                        as: "content",
                        in: {
                            contentId: "$$content._id",
                            title: "$$content.title",
                            createdAt: "$$content.createdAt"
                        }
                    }
                }
            }
            },
          ]);
        if (!userData) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
        return NextResponse.json({user: userData}, { status: 200 });
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