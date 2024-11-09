"use client";
import { Box, Typography, Avatar, Button, IconButton, Divider, Grid, Card } from '@mui/material';
import { Favorite, Comment, Replay, Send } from '@mui/icons-material';

const PersonalInfoPost = () => {
  const userData = {
    name: "Kushal Khawas",
    followers: "1k",
    postDate: "1w · Edited",
    postText: "Proud of the remarkable team behind IEEE Week 2024 - Second Edition! 🌟 A huge thank you to Professor Bhabesh Deka - Faculty Counselor, IEEE SB.",
    imageUrls: [
      "/path-to-image1.jpg", // Replace with actual image paths
      "/path-to-image2.jpg",
      "/path-to-image3.jpg",
    ],
  };

  return (
    <Box 
      className="flex flex-col items-center w-full p-4 bg-gray-800 text-white rounded-lg shadow-lg justify center"
       sx={{
    width: {
      xs: '100%',   // 100% width on extra-small screens
      sm: '80%',    // 80% width on small screens
      md: '70%',    // 70% width on medium screens
      lg: '60%',    // 60% width on large screens
    },
  }}
      
    >
      {/* Header with User Info */}
      <Box className="flex items-center w-full mb-4">
        <Avatar src="/path-to-avatar.jpg" sx={{ width: 50, height: 50 }} />
        <Box className="ml-3">
          <Typography variant="h6" className="font-semibold">{userData.name}</Typography>
          <Typography variant="body2" className="text-gray-400">{userData.postDate}</Typography>
        </Box>
        <Button variant="outlined" color="primary" className="ml-auto">+ Follow</Button>
      </Box>

      {/* Post Text */}
      <Typography variant="body1" className="text-gray-300 mb-4">{userData.postText}</Typography>

      {/* Post Images */}
      <Grid container spacing={1}>
        {userData.imageUrls.map((image, index) => (
          <Grid item xs={4} key={index}>
            <Card className="bg-gray-700">
              <img src={image} alt={`Post Image ${index + 1}`} className="w-full h-32 object-cover rounded-md" />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider className="w-full my-4 bg-gray-600" />

      {/* Engagement Buttons */}
      <Box className="w-full flex justify-between text-gray-400">
        <Box className="flex items-center cursor-pointer">
          <IconButton className="text-red-500">
            <Favorite />
          </IconButton>
          <Typography variant="body2">Like</Typography>
        </Box>
        <Box className="flex items-center cursor-pointer">
          <IconButton className="text-gray-400">
            <Comment />
          </IconButton>
          <Typography variant="body2">Comment</Typography>
        </Box>
        <Box className="flex items-center cursor-pointer">
          <IconButton className="text-gray-400">
            <Replay />
          </IconButton>
          <Typography variant="body2">Repost</Typography>
        </Box>
        <Box className="flex items-center cursor-pointer">
          <IconButton className="text-gray-400">
            <Send />
          </IconButton>
          <Typography variant="body2">Send</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalInfoPost;
