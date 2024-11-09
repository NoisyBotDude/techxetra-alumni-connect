"use client";
import { Box, Typography, Avatar, Button, Divider } from "@mui/material";
import { Bookmark, Star } from "@mui/icons-material";

const PersonalInfoSidebar = (props) => {
  const profileData = {
    name: "Kushal Khawas",
    description:
      "4th yr B.Tech undergraduate (ECE), MERN Developer, @YouTuber, with photography, video editing and Photoshop skills",
    profileViewers: 29,
    postImpressions: 9
  };

  return (
    <Box className="flex flex-col items-center w-full max-w-sm p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      {/* Profile Section */}
      <Box className="flex flex-col items-center mb-4">
        <Avatar
          src="/path-to-avatar.jpg" // Replace with actual image path
          sx={{ width: 80, height: 80 }}
        />
        <Typography variant="h6" className="mt-2 font-semibold text-white">
          {props.data?.firstName} {props.data?.lastName}
        </Typography>
        <Typography
          variant="body2"
          className="text-gray-400 text-center mt-1 px-4"
        >
          {props.data?.description}
        </Typography>
      </Box>

      <Divider className="w-full mb-4 bg-gray-700" />

      {/* Stats Section */}
      <Box className="w-full px-4 mb-4">
        <Box className="flex justify-between items-center mb-2">
          <Typography variant="body2" className="text-gray-400">
            Profile
          </Typography>
          <Typography variant="body2" className="text-blue-400">
            {props.data?.profileStats?.profileViewers}
          </Typography>
        </Box>
        <Box className="flex justify-between items-center mb-2">
          <Typography variant="body2" className="text-gray-400">
            Posts
          </Typography>
          <Typography variant="body2" className="text-blue-400">
            {props.data?.profileStats?.profileViewers}
          </Typography>
        </Box>
        <Box className="flex justify-between items-center">
          <Typography variant="body2" className="text-gray-400">
            Connection
          </Typography>
          <Typography variant="body2" className="text-blue-400">
            {props.data?.profileStats?.postImpressions}
          </Typography>
        </Box>
      </Box>

      <Divider className="w-full mb-4 bg-gray-700" />

      <Divider className="w-full mb-4 bg-gray-700" />
    </Box>
  );
};

export default PersonalInfoSidebar;
