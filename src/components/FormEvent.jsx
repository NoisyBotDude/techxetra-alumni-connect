'use client'
import { Box, Typography, Button, IconButton, TextField, MenuItem, Radio, RadioGroup, FormControlLabel, FormControl, Select, InputLabel } from '@mui/material';
import { Close, PhotoCamera } from '@mui/icons-material';
import React, { useState } from 'react';

const CreateEventModal = (props) => {

  const [title, setTitle] = useState('');
  const [eventType, setEventType] = useState('meetup');
  const [eventFormat, setEventFormat] = useState('offline');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [timezone, setTimezone] = useState('gmt')
  const [featured, setFeatured] = useState('no')
  const [location, setLocation] = useState('');

  return (
    // Full-screen overlay with dark background
    <Box
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90"
      sx={{ zIndex: 1300 }} // Ensures the modal appears above other content
    >
      {/* Modal Content Container */}
      <Box className="flex flex-col items-center w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg">

        {/* Header */}
        <Box className="flex justify-between items-center w-full p-4 border-b border-gray-700">
          <Typography variant="h6">Create an Event</Typography>
          <IconButton className="text-gray-400">
            <Close />
          </IconButton>
        </Box>

        {/* Scrollable Content */}
        <Box
          className="overflow-y-auto w-full p-4"
          sx={{ maxHeight: '60vh' }} // Limits the scrollable content height
        >
          {/* Cover Image Upload Section */}
          <Box className="flex flex-col items-center w-full mb-4 p-4 bg-gray-700 rounded-md">
            <IconButton color="primary" component="label" className="text-gray-400">
              <input hidden accept="image/*" type="file" />
              <PhotoCamera sx={{ fontSize: 40 }} />
            </IconButton>
            <Typography variant="body2" className="text-gray-400">
              Upload cover image
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Minimum width 480 pixels, 16:9 recommended
            </Typography>
          </Box>
          <Typography variant="body2" className="text-gray-400 mb-1">Event Title</Typography>
          <TextField
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-4"
            InputProps={{ className: "bg-gray-700 text-white" }}
          />
          {/* Event Type Selection */}
          <FormControl component="fieldset" className="w-full mb-4">
            <Typography variant="body2" className="text-gray-400 mb-1">Event type</Typography>
            <RadioGroup row
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            >
              <FormControlLabel value="meetup" control={<Radio />} label="Meetup" />
              <FormControlLabel value="workshop" control={<Radio />} label="Workshop" />
              <FormControlLabel value="conference" control={<Radio />} label="Conference" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className="w-full mb-4">
            <Typography variant="body2" className="text-gray-400 mb-1">Event format</Typography>
            <RadioGroup row
              value={eventFormat}
              onChange={(e) => setEventFormat(e.target.value)}
            >
              <FormControlLabel value="online" control={<Radio />} label="Online" />
              <FormControlLabel value="offline" control={<Radio />} label="In person" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className="w-full mb-4">
            <Typography variant="body2" className="text-gray-400 mb-1">Featured Event</Typography>
            <RadioGroup row
              value={featured}
              onChange={(e) => setFeatured(e.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>


          {/* Event Date and Time */}
          <TextField
            label="Select Date"
            type="date"
            fullWidth
            className="mb-4"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            InputProps={{ className: "bg-gray-700 text-white" }}
          />
          <TextField
            label="Select Time"
            type="time"
            fullWidth
            className="mb-4"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            InputLabelProps={{ shrink: true }}
            InputProps={{ className: "bg-gray-700 text-white" }}
          />

          {/* Time Zone Selection */}
          <FormControl component="fieldset" className="w-full mb-4">
            <Typography variant="body2" className="text-gray-400 mb-1">Time Zone</Typography>
            <RadioGroup
              row
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              <FormControlLabel value="gmt" control={<Radio />} label="GMT" />
              <FormControlLabel value="est" control={<Radio />} label="EST" />
              <FormControlLabel value="pst" control={<Radio />} label="PST" />
              <FormControlLabel value="ist" control={<Radio />} label="IST" />
            </RadioGroup>
          </FormControl>

          {/* Description Field */}
          <TextField
            label="Description"
            multiline
            rows={3}
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            className="bg-gray-700 text-white mb-4"
            InputLabelProps={{ className: "text-gray-400" }}
          />
          <TextField
            label="Location"
            multiline
            rows={3}
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            variant="outlined"
            className="bg-gray-700 text-white mb-4"
            InputLabelProps={{ className: "text-gray-400" }}
          />
        </Box>

        {/* Footer Actions */}
        <Box className="flex justify-end w-full p-4 border-t border-gray-700">
          <Button variant="contained" color="primary" className="bg-blue-500 text-white" onClick={() => props.handleAddEvent(
            {
              title,
              type: eventType,
              format: eventFormat,
              description,
              date,
              time,
              timezone,
              location,
              featured
            }
          )}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateEventModal;
