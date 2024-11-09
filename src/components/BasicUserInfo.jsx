'use client'
import { Box, Typography, Avatar } from "@mui/material";

const BasicInfo = () => {
  const userInfo = {
    name: "Ananya Grover",
    title: "UI/UX Designer",
    description: `Full stack product designer with hands-on experience in solving problems for clients ranging from Real Estate, Hospitality, Rentals, On Demand Healthcare, IT Services & Social Network among others. I have good communication skills, a well-defined process for engagement, a toolkit for collaboration, & a user-centered approach to design.`,
    avatarUrl: "/path-to-avatar.jpg", // Replace with the actual path to the avatar image
  };

  return (
    <Box className="flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-sm">
      {/* Profile Picture */}
      <Avatar
        src={userInfo.avatarUrl}
        alt={userInfo.name}
        sx={{ width: 100, height: 100, mb: 2 }}
      />
      
      {/* Name */}
      <Typography variant="h5" className="font-semibold text-blue-400">
        {userInfo.name}
      </Typography>

      {/* Title */}
      <Typography variant="body1" className="text-gray-400 mb-4">
        {userInfo.title}
      </Typography>

      {/* Description */}
      <Typography variant="body2" className="text-gray-300 text-center">
        {userInfo.description}
      </Typography>
    </Box>
  );
};

export default BasicInfo;
