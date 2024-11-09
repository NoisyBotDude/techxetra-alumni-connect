'use client'
import { Box, Typography, Button, IconButton, TextField, MenuItem, Radio, RadioGroup, FormControlLabel, FormControl, Select, InputLabel } from '@mui/material';
import { Close, PhotoCamera } from '@mui/icons-material';

const CreateEventModal = ({ onClose }) => {
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
          <IconButton onClick={onClose} className="text-gray-400">
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

          {/* Event Type Selection */}
          <FormControl component="fieldset" className="w-full mb-4">
            <Typography variant="body2" className="text-gray-400 mb-1">Event type</Typography>
            <RadioGroup row>
              <FormControlLabel value="online" control={<Radio />} label="Online" />
              <FormControlLabel value="inPerson" control={<Radio />} label="In person" />
            </RadioGroup>
          </FormControl>

          {/* Event Format Selection */}
          <FormControl fullWidth className="mb-4">
            <InputLabel className="text-gray-400">Event format</InputLabel>
            <Select label="Event format" className="bg-gray-700 text-white">
              <MenuItem value="conference">Conference</MenuItem>
              <MenuItem value="webinar">Webinar</MenuItem>
              <MenuItem value="workshop">Workshop</MenuItem>
            </Select>
          </FormControl>

          {/* Event Date and Time */}
          <TextField
            label="Select Date"
            type="date"
            fullWidth
            className="mb-4"
            InputLabelProps={{ shrink: true }}
            InputProps={{ className: "bg-gray-700 text-white" }}
          />
          <TextField
            label="Select Time"
            type="time"
            fullWidth
            className="mb-4"
            InputLabelProps={{ shrink: true }}
            InputProps={{ className: "bg-gray-700 text-white" }}
          />

          {/* Time Zone Selection */}
          <FormControl fullWidth className="mb-4">
            <InputLabel className="text-gray-400">Time Zone</InputLabel>
            <Select label="Time Zone" className="bg-gray-700 text-white">
              <MenuItem value="GMT">GMT</MenuItem>
              <MenuItem value="EST">EST</MenuItem>
              <MenuItem value="PST">PST</MenuItem>
              <MenuItem value="IST">IST</MenuItem>
            </Select>
          </FormControl>

          {/* Description Field */}
          <TextField
            label="Description"
            multiline
            rows={3}
            fullWidth
            variant="outlined"
            className="bg-gray-700 text-white mb-4"
            InputLabelProps={{ className: "text-gray-400" }}
          />
        </Box>

        {/* Footer Actions */}
        <Box className="flex justify-end w-full p-4 border-t border-gray-700">
          <Button variant="contained" color="primary" className="bg-blue-500 text-white" onClick={() => console.log("Next step")}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateEventModal;
