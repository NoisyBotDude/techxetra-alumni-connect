'use client';
import { Box, Typography, Avatar, Button, Divider } from '@mui/material';
import { Bookmark, Star } from '@mui/icons-material';

const PersonalInfoSidebar = (props) => {
  const profileData = {
    name: "Kushal Khawas",
    description: "4th yr B.Tech undergraduate (ECE), MERN Developer, @YouTuber, with photography, video editing and Photoshop skills",
    profileViewers: 29,
    postImpressions: 9,
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
        <Typography variant="body2" className="text-gray-400 text-center mt-1 px-4">
          {props.data?.description}
        </Typography>
      </Box>

      <Divider className="w-full mb-4 bg-gray-700" />

      {/* Stats Section */}
      <Box className="w-full px-4 mb-4">
        <Box className="flex justify-between items-center mb-2">
          <Typography variant="body2" className="text-gray-400">Profile viewers</Typography>
          <Typography variant="body2" className="text-blue-400">{props.data?.profileStats?.profileViewers}</Typography>
        </Box>
        <Box className="flex justify-between items-center">
          <Typography variant="body2" className="text-gray-400">Post impressions</Typography>
          <Typography variant="body2" className="text-blue-400">{props.data?.profileStats?.postImpressions}</Typography>
        </Box>
      </Box>

      <Divider className="w-full mb-4 bg-gray-700" />

      {/* Premium Section */}
      <Box className="w-full px-4 mb-4 text-center">
        <Typography variant="body2" className="text-gray-400 mb-2">Gain exclusive tools & insights</Typography>
        <Button
          variant="contained"
          startIcon={<Star />}
          className="bg-yellow-500 text-gray-900 font-bold px-3 py-1 rounded-lg"
        >
          Redeem Premium for ₹0
        </Button>
      </Box>

      <Divider className="w-full mb-4 bg-gray-700" />

      {/* Saved Items Section */}
      <Box className="w-full px-4 flex items-center">
        <Bookmark className="text-gray-400" />
        <Typography variant="body2" className="text-gray-400 ml-2">Saved items</Typography>
      </Box>
    </Box>
  );
};

export default PersonalInfoSidebar;
