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
    <Box className="w-full py-4 px-4 flex flex-col justify-center space-y-4 items-center bg-gray-800 text-white rounded-lg shadow-lg">
      {/* Profile Picture */}
      <Avatar
        src={userInfo.avatarUrl}
        alt={userInfo.name}
        className="border border-black h-16 w-16 text-xl font-semibold"
        // sx={{ width: 80, height: 80, mb: 2, border: '1px solid black', fontSize: 16 }}
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