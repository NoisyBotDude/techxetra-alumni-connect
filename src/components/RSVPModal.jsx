"use client"

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const RSVPModal = ({ open, onClose, event }) => {
  const handleRSVP = () => {
    // Add RSVP logic here
    alert(`You have successfully RSVP'd for ${event.title}`);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-center">
        <CheckCircleIcon className="text-green-500 mr-2" />
        RSVP Confirmation
      </DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to RSVP for {event?.title} on {event?.date}?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} className="text-gray-500">Cancel</Button>
        <Button onClick={handleRSVP} className="text-green-600">Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RSVPModal;