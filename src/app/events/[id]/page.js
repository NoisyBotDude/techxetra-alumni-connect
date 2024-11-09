"use client";

import React, { useState } from "react";
import { Typography, Button, Chip, Box } from "@mui/material";
import RSVPModal from "../../../components/RSVPModal";

const EventDetailPage = ({ event }) => {
  const [rsvpOpen, setRsvpOpen] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <Box className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg">
        <Typography variant="h3" className="font-bold mb-4">
          {event?.title}
        </Typography>
        <Typography variant="body1" className="mb-2">
          {event?.date} • {event?.time}
        </Typography>
        <Typography variant="body2" className="text-gray-100 mb-6">
          {event?.description}
        </Typography>
        <Button
          variant="contained"
          className="bg-green-500 hover:bg-green-600 text-white mr-4 rounded-lg"
          onClick={() => setRsvpOpen(true)}
        >
          RSVP
        </Button>
        <Chip
          label="Reminder Set"
          color="primary"
          className="bg-amber-500 text-white-900 font-bold"
        />
      </Box>
      <RSVPModal
        open={rsvpOpen}
        onClose={() => setRsvpOpen(false)}
        event={event}
      />
    </div>
  );
};

export default EventDetailPage;
