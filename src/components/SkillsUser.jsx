'use client'
import React, { useState } from "react";
import { Box, Typography, Chip, Grid, IconButton, TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const Skills = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [skills, setSkills] = useState(props.skills);
  console.log("Skills:", skills);
  const [newSkill, setNewSkill] = useState("");

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  const handleSave = async () => {
    try {
      const response = await fetch("/api/skills/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: props.userId, skills }),
      });

      if (response.ok) {
        console.log("Skills updated successfully");
      } else {
        console.error("Failed to update skills");
      }
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving skills:", error);
    }
  };

  return (
    <Box className="flex flex-col items-start w-full py-4 px-4 bg-gray-800 text-white rounded-lg shadow-lg">
      {/* Title and Edit Button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" mb={2}>
        <Typography variant="h6" className="font-semibold text-white">
          Skills
        </Typography>
        <IconButton onClick={handleEditToggle} color="primary">
          {isEditing ? <SaveIcon /> : <EditIcon />}
        </IconButton>
      </Box>

      {isEditing ? (
        <>
          {/* Input for Adding New Skill */}
          <Box display="flex" alignItems="center" mb={2} width="100%">
            <TextField
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add a new skill"
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "#2c2c2c",
                color: "white",
                borderRadius: 1,
                input: { color: "white" },
              }}
            />
            <Button onClick={handleAddSkill} sx={{ ml: 2, color: "lightblue" }}>
              Add
            </Button>
          </Box>

          {/* Editable Skills Grid with Remove Option */}
          <Grid container spacing={1}>
            {skills.map((skill, index) => (
              <Grid item key={index}>
                <Chip
                  label={skill}
                  onDelete={() => handleRemoveSkill(index)}
                  sx={{
                    color: "lightblue",
                    borderColor: "lightblue",
                    backgroundColor: "transparent",
                  }}
                />
              </Grid>
            ))}
          </Grid>

          {/* Save Button */}
          <Box mt={2}>
            <Button onClick={handleSave} variant="contained" color="primary" sx={{ backgroundColor: "#4F86F7" }}>
              Save
            </Button>
          </Box>
        </>
      ) : (
        // Display Skills as Chips
        <Grid container spacing={1}>
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <Chip
                label={skill}
                variant="outlined"
                sx={{
                  color: "lightblue",
                  borderColor: "lightblue",
                  backgroundColor: "transparent",
                }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Skills;