'use client'
import React, { useState } from "react";
import { Box, Typography, IconButton, TextField, MenuItem, Button, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { Close } from "@mui/icons-material";

const CreateJobModal = ({ handleAddJob, onClose, data }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('Remote');
  const [salary, setSalary] = useState('N/A');
  const [jobType, setJobType] = useState('Full-time');
  const [employmentType, setEmploymentType] = useState('Remote');

  return (
    <Box
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90"
      sx={{ zIndex: 1300 }}
    >
      <Box className="flex flex-col items-center w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg">
        <Box className="flex justify-between items-center w-full p-4 border-b border-gray-700">
          <Typography variant="h6">Create Job Post</Typography>
          <IconButton className="text-gray-400" onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Box className="overflow-y-auto w-full p-4" sx={{ maxHeight: '60vh' }}>
          {/* Job Title */}
          <Typography variant="body2" className="text-gray-400 mb-1">Job Title</Typography>
          <TextField
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-4"
            InputProps={{ className: "bg-gray-700 text-white" }}
          />

          {/* Company */}
          <Typography variant="body2" className="text-gray-400 mb-1">Company</Typography>
          <TextField
            label="Company"
            type="text"
            fullWidth
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mb-4"
            InputProps={{ className: "bg-gray-700 text-white" }}
          />

          {/* Location */}
          <Typography variant="body2" className="text-gray-400 mb-1">Location</Typography>
          <TextField
            label="Location"
            type="text"
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mb-4"
            InputProps={{ className: "bg-gray-700 text-white" }}
          />

          {/* Salary */}
          <Typography variant="body2" className="text-gray-400 mb-1">Salary</Typography>
          <TextField
            label="Salary"
            type="text"
            fullWidth
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="mb-4"
            InputProps={{ className: "bg-gray-700 text-white" }}
          />

          {/* Job Type */}
          <FormControl component="fieldset" className="w-full mb-4">
            <Typography variant="body2" className="text-gray-400 mb-1">Job Type</Typography>
            <RadioGroup
              row
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <FormControlLabel value="Full-time" control={<Radio />} label="Full-time" />
              <FormControlLabel value="Part-time" control={<Radio />} label="Part-time" />
              <FormControlLabel value="Contract" control={<Radio />} label="Contract" />
              <FormControlLabel value="Internship" control={<Radio />} label="Internship" />
              <FormControlLabel value="Temporary" control={<Radio />} label="Temporary" />
            </RadioGroup>
          </FormControl>

          {/* Employment Type */}
          <FormControl component="fieldset" className="w-full mb-4">
            <Typography variant="body2" className="text-gray-400 mb-1">Employment Type</Typography>
            <RadioGroup
              row
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
            >
              <FormControlLabel value="Remote" control={<Radio />} label="Remote" />
              <FormControlLabel value="On-site" control={<Radio />} label="On-site" />
              <FormControlLabel value="Hybrid" control={<Radio />} label="Hybrid" />
            </RadioGroup>
          </FormControl>

          {/* Description */}
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
        </Box>

        {/* Footer Actions */}
        <Box className="flex justify-end w-full p-4 border-t border-gray-700">
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-500 text-white"
            onClick={() => handleAddJob({
              title,
              description,
              company,
              location,
              salary,
              jobType,
              employmentType,
              postedBy: data.userId
            })}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateJobModal;