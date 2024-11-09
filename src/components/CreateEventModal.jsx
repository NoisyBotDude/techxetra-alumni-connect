"use client"

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const CreateEventModal = ({ open, onClose }) => {
  const [eventData, setEventData] = useState({ title: '', date: '', time: '', description: '' });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    // Add event creation logic here
    alert(`Event ${eventData.title} created successfully!`);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
  <DialogTitle>Create New Event</DialogTitle>
  <DialogContent>
    <TextField
      label="Title"
      name="title"
      type='text'
      required
      fullWidth
      onChange={handleChange}
      className="mb-4"
      InputLabelProps={{ shrink: true }}
    />
    <TextField
      label="Date"
      name="date"
      type="date"
      required
      fullWidth
      onChange={handleChange}
      className="mb-4"
      InputLabelProps={{ shrink: true }} // Ensures label doesn't overlap with date input
    />
    <TextField
      label="Time"
      name="time"
      type="time"
      required
      fullWidth
      onChange={handleChange}
      className="mb-4"
      InputLabelProps={{ shrink: true }} // Ensures label doesn't overlap with time input
    />
    <TextField
      label="Description"
      name="description"
      required
      multiline
      rows={4}
      fullWidth
      onChange={handleChange}
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={onClose} className="text-gray-500">Cancel</Button>
    <Button onClick={handleCreate} className="bg-blue-500 text-white">Create Event</Button>
  </DialogActions>
</Dialog>

  );
};

export default CreateEventModal;