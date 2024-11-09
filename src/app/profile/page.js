"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  Grid,
  Paper
} from "@mui/material";
import { Edit } from "@mui/icons-material";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Student in Electronics and Communication Engineering, passionate about technology and innovation.",
    college: "XYZ College",
    graduationYear: "2025"
  });

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  return (
    <Box className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
      <Paper
        elevation={3}
        className="w-full max-w-3xl p-6 bg-gray-800 rounded-lg shadow-lg"
      >
        <Box className="flex flex-col items-center mb-6">
          <Avatar sx={{ width: 100, height: 100 }} className="bg-blue-600">
            {profileData.name.charAt(0)}
          </Avatar>
          <Typography variant="h5" className="mt-4 text-blue-400 font-semibold">
            {profileData.name}
          </Typography>
          <Typography variant="body1" className="text-gray-400">
            {profileData.college}
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            Graduation Year: {profileData.graduationYear}
          </Typography>
        </Box>
        <Box className="w-full">
          <Typography variant="h6" className="text-blue-400 font-semibold mb-2">
            About Me
          </Typography>
          {editMode ? (
            <TextField
              name="bio"
              label="Bio"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={profileData.bio}
              onChange={handleChange}
              className="mb-4"
              InputProps={{
                style: { color: "white" }
              }}
              InputLabelProps={{
                style: { color: "#9ca3af" }
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#3B82F6"
                  },
                  "&:hover fieldset": {
                    borderColor: "#60A5FA"
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#60A5FA"
                  }
                }
              }}
            />
          ) : (
            <Typography variant="body1" className="text-gray-300 mb-4">
              {profileData.bio}
            </Typography>
          )}
        </Box>
        <Box className="w-full">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                label="Email"
                fullWidth
                variant="outlined"
                disabled={!editMode}
                value={profileData.email}
                onChange={handleChange}
                InputProps={{
                  style: { color: "white" }
                }}
                InputLabelProps={{
                  style: { color: "#9ca3af" }
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white"
                    },
                    "&:hover fieldset": {
                      borderColor: "#60A5FA"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#60A5FA"
                    }
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="graduationYear"
                label="Graduation Year"
                fullWidth
                variant="outlined"
                disabled={!editMode}
                value={profileData.graduationYear}
                onChange={handleChange}
                InputProps={{
                  style: { color: "white" }
                }}
                InputLabelProps={{
                  style: { color: "#9ca3af" }
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#3B82F6"
                    },
                    "&:hover fieldset": {
                      borderColor: "#60A5FA"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#60A5FA"
                    }
                  }
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box className="flex justify-end mt-6">
          {editMode ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditToggle}
            >
              Save Changes
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              startIcon={<Edit />}
              onClick={handleEditToggle}
              className="text-white border-white"
            >
              Edit Profile
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
