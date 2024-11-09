"use client"

import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import EventCard from '../../components/EventCard';
import CreateEventModal from '../../components/CreateEventModal';
import { useState } from 'react';

const eventsData = [
  {
    id: 1,
    title: 'Annual Reunion',
    date: 'April 15, 2024',
    time: '5:00 PM',
    description: 'Join us for the annual reunion of our alumni.',
  },
  // More sample events
];

const EventsPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <Typography variant="h4" className="text-gray-800 font-bold">
          Upcoming Alumni Events
        </Typography>
        <Button
          variant="contained"
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
          onClick={() => setOpen(true)}
        >
          Create Event
        </Button>
      </div>
      <Grid container spacing={4}>
        {eventsData.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
      <CreateEventModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default EventsPage;