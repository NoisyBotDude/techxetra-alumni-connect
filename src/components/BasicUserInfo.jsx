import { Box, Typography, Avatar, Button, TextField } from "@mui/material";
import { useState } from "react";

const BasicInfo = ({ userData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    bio: userData?.bio,
    currentRole: userData?.professionalJourney?.currentRole,
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/users/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userData.userId,
          ...formData,
        }),
      });
      if (response.ok) {
        console.log('User information updated successfully');
        setIsEditing(false);
      } else {
        console.error('Failed to update user information');
      }
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  if (!userData) return null;

  return (
    <Box className="w-full py-4 px-4 flex flex-col justify-center space-y-4 items-center bg-gray-800 text-white rounded-lg shadow-lg">
      <Avatar
        src={userData.profileImage}
        alt={`${userData.firstName} ${userData.lastName}`}
        className="border border-black h-16 w-16 text-xl font-semibold"
      />

      {/* Editable Fields */}
      {isEditing ? (
        <>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#b0b0b0' } }} // Label color
            InputProps={{
              style: {
                color: 'white', // Text color
                backgroundColor: '#2c2c2c', // Background color for input box
                borderColor: '#4F86F7' // Border color
              }
            }}
            sx={{
              mb: 2, // Margin bottom
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#4F86F7', // Border color for outlined variant
                },
                '&:hover fieldset': {
                  borderColor: '#66bb6a', // Hover color for border
                },
              },
            }}
          />

          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#b0b0b0' } }}
            InputProps={{
              style: {
                color: 'white',
                backgroundColor: '#2c2c2c',
                borderColor: '#4F86F7',
              }
            }}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#4F86F7',
                },
                '&:hover fieldset': {
                  borderColor: '#66bb6a',
                },
              },
            }}
          />

          <TextField
            name="currentRole"
            label="Current Role"
            variant="outlined"
            value={formData.currentRole}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#b0b0b0' } }}
            InputProps={{
              style: {
                color: 'white',
                backgroundColor: '#2c2c2c',
                borderColor: '#4F86F7',
              }
            }}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#4F86F7',
                },
                '&:hover fieldset': {
                  borderColor: '#66bb6a',
                },
              },
            }}
          />

          <TextField
            name="bio"
            label="Bio"
            variant="outlined"
            multiline
            rows={3}
            value={formData.bio}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#b0b0b0' } }}
            InputProps={{
              style: {
                color: 'white',
                backgroundColor: '#2c2c2c',
                borderColor: '#4F86F7',
              }
            }}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#4F86F7',
                },
                '&:hover fieldset': {
                  borderColor: '#66bb6a',
                },
              },
            }}
          />

          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              backgroundColor: '#4F86F7',
              color: 'white',
              '&:hover': {
                backgroundColor: '#66bb6a',
              },
              mt: 2,
            }}
          >
            Save
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h5" className="font-semibold text-blue-400">
            {userData.firstName} {userData.lastName}
          </Typography>
          <Typography variant="body1" className="text-gray-400 mb-4">
            {userData.professionalJourney?.currentRole}
          </Typography>
          <Typography variant="body2" className="text-gray-300 text-center">
            {userData.bio}
          </Typography>
        </>
      )}

      {/* Edit Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleEditClick}
        sx={{ backgroundColor: "#4F86F7", mt: 2 }}
      >
        {isEditing ? 'Cancel' : 'Edit Profile'}
      </Button>
    </Box>
  );
};

export default BasicInfo;