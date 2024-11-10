"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

const Experience = ({ title, initialExperiences, userId }) => {
  const [experiences, setExperiences] = useState(initialExperiences);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [experienceData, setExperienceData] = useState({
    companyName: "",
    role: "",
    duration: "",
    location: "",
    initials: "",
    color: "#4F86F7",
    description: "",
  });

  // Open dialog for adding or editing
  const handleOpenDialog = (index = null) => {
    if (index !== null) {
      setExperienceData(experiences[index]);
      setEditingIndex(index);
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setExperienceData({
      companyName: "",
      role: "",
      duration: "",
      location: "",
      initials: "",
      color: "#4F86F7",
      description: "",
    });
    setEditingIndex(null);
  };

  // Function to handle adding experience
  const addExperience = async (experience) => {
    try {
      const response = await fetch('/api/users/experience', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userId,
          experience
        })
      });
      if (response.ok) {
        const updatedUser = await response.json();
        console.log('Updated user add:', updatedUser);
        setExperiences(updatedUser.user[0].professionalJourney);
      } else {
        console.error('Failed to add experience');
      }
    } catch (error) {
      console.error('Error adding experience:', error);
    }
  };

  // Function to handle editing experience
  const editExperience = async (experience, experienceId) => {
    try {
      const response = await fetch('/api/users/experience', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userId, 
          experienceId,
          updatedExperience: experience
        })
      });
      if (response.ok) {
        const updatedUser = await response.json();
        console.log('Updated user edit:', updatedUser);
        setExperiences(updatedUser.user[0].professionalJourney);
      } else {
        console.error('Failed to update experience');
      }
    } catch (error) {
      console.error('Error updating experience:', error);
    }
  };

  const handleSaveExperience = () => {
    if (editingIndex !== null) {
      const experienceId = experiences[editingIndex]._id; // assuming each experience has a unique _id
      editExperience(experienceData, experienceId);
    } else {
      console.log('Adding experience:', experienceData);
      addExperience(experienceData);
    }
    handleCloseDialog();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box>
      <Accordion className="rounded-md mb-2 bg-gray-800 text-white">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="experience-section-content"
          id="experience-section-header"
        >
          <Typography variant="h6" className="font-semibold text-white">
            {title}
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          {experiences?.map((experience, index) => (
            <Accordion key={index} className="text-white bg-slate-700 mb-2">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Box className="flex items-center">
                  <Avatar
                    className="w-12 h-12 font-semibold mr-2"
                    sx={{
                      bgcolor: experience.color,
                      color: "white",
                      fontSize: 16,
                    }}
                  >
                    {experience.initials}
                  </Avatar>
                  <Box>
                    <Typography variant="body1" className="font-semibold text-blue-400">
                      {experience.companyName}
                    </Typography>
                    <Typography variant="body2" color="gray">
                      {experience.role}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleOpenDialog(index)}
                  sx={{ ml: 2 }}
                >
                  Edit
                </Button>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant="body2" color="gray" mb={1}>
                  Duration: {experience.duration} | Location: {experience.location}
                </Typography>
                <Typography variant="body2" color="white">
                  {experience.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}

          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
            sx={{ mt: 2 }}
          >
            Add Experience
          </Button>
        </AccordionDetails>
      </Accordion>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>{editingIndex !== null ? "Edit Experience" : "Add Experience"}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Company Name"
            name="companyName"
            fullWidth
            value={experienceData.companyName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Role"
            name="role"
            fullWidth
            value={experienceData.role}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Duration"
            name="duration"
            fullWidth
            value={experienceData.duration}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Location"
            name="location"
            fullWidth
            value={experienceData.location}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            fullWidth
            multiline
            rows={3}
            value={experienceData.description}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveExperience} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Experience;