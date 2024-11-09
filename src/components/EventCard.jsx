"use client"

import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Avatar } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import { useRouter } from 'next/navigation';

const EventCard = ({ event }) => {
  const router = useRouter();

  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg">
      <CardContent>
        <div className="flex items-center mb-4">
          <Avatar className="bg-white text-indigo-700 mr-3">
            <EventIcon />
          </Avatar>
          <Typography variant="h6" className="font-bold">
            {event.title}
          </Typography>
        </div>
        <Typography variant="body2" className="text-gray-200">
          {event.date} • {event.time}
        </Typography>
        <Typography variant="body2" className="mt-2 text-gray-100">
          {event.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          className="text-white border-white hover:bg-white hover:text-indigo-700"
          onClick={() => router.push(`/events/${event.id}`)}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;