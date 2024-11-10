'use client'
import React, { useState } from "react";
import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import { Download, Email } from "@mui/icons-material";

const BasicInformation = ({ userInfo }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(userInfo);

  const handleToggleEdit = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/users/basic-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        console.log("User information updated successfully");
        setEditMode(false); // Exit edit mode after saving
      } else {
        console.error("Error updating user information");
      }
    } catch (error) {
      console.error("Error updating user information", error);
    }
  };

  return (
    <Box className="flex flex-col w-full px-4 py-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <Typography variant="h6" className="font-semibold text-white mb-4">
        Basic Information
      </Typography>

      {editMode ? (
        <Grid container spacing={2}>
          {["age", "experience", "ctc", "location", "phone", "email"].map((field, index) => (
            <Grid item xs={6} key={index}>
              <TextField
                label={field.charAt(0).toUpperCase() + field.slice(1).replace(/_/g, " ")}
                name={field}
                variant="outlined"
                fullWidth
                value={formData[field]}
                onChange={handleChange}
                InputLabelProps={{ style: { color: "#b0bec5" } }}
                InputProps={{
                  style: { color: "white" },
                  sx: { backgroundColor: "#424242" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#b0bec5" },
                    "&:hover fieldset": { borderColor: "#90caf9" },
                    "&.Mui-focused fieldset": { borderColor: "#4F86F7" },
                  },
                }}
              />
            </Grid>
          ))}
          <Box mt={2} display="flex" justifyContent="space-between" width="100%">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ backgroundColor: "#4F86F7" }}
            >
              Save
            </Button>
            <Button variant="outlined" onClick={handleToggleEdit} sx={{ color: "white", borderColor: "white" }}>
              Cancel
            </Button>
          </Box>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          {/* Display basic info fields */}
          {["age", "experience", "ctc", "location", "phone", "email"].map((field, index) => (
            <Grid item xs={6} key={index}>
              <Typography variant="body2" color="white">
                {field.toUpperCase()}
              </Typography>
              <Typography variant="body1" color="white">
                {userInfo[field]}
              </Typography>
            </Grid>
          ))}
          <Button variant="contained" color="primary" onClick={handleToggleEdit} sx={{ backgroundColor: "#4F86F7", mt: 2 }}>
            Edit
          </Button>
        </Grid>
      )}
    </Box>
  );
};

export default BasicInformation;