"use client";
import {
  Box,
  Typography,
  Avatar,
  Button,
  IconButton,
  Divider,
  TextField
} from "@mui/material";
import {
  Close,
  CalendarToday,
  Article,
  PhotoCamera,
  EmojiEmotions
} from "@mui/icons-material";
import EventModal from "./EventModal";

const AddPostComponent = () => {
  const userData = {
    name: "Kushal",
    isVerified: false,
    avatar: "/path-to-avatar.jpg" // Replace with actual image path
  };

  return (
    <Box className="flex flex-col items-center w-full p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      {/* Post Input Box */}
      <Box className="w-full bg-gray-700 rounded-md p-3 mb-4 flex items-center">
        <Avatar src={userData.avatar} sx={{ width: 40, height: 40 }} />
        <TextField
          variant="outlined"
          placeholder="Start a post, try writing with AI"
          fullWidth
          className="ml-2 bg-gray-800 rounded-lg text-white"
          InputProps={{
            style: { color: "white", borderRadius: "8px" }
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#4B5563" // Dark border color
              },
              "&:hover fieldset": {
                borderColor: "#60A5FA" // Blue on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#60A5FA" // Blue on focus
              }
            }
          }}
        />
      </Box>

      <Divider className="w-full mb-4 bg-gray-600" />

      {/* Action Buttons */}
      <Box className="w-full flex justify-around text-gray-400">
        <Box className="flex items-center cursor-pointer">
          <PhotoCamera className="mr-1 text-blue-400" />
          <Typography variant="body2">Media</Typography>
        </Box>
        <Box className="flex items-center cursor-pointer">
          <CalendarToday className="mr-1 text-yellow-500" />
          <EventModal />
        </Box>
        <Box className="flex items-center cursor-pointer">
          <EmojiEmotions className="mr-1 text-yellow-500" />{" "}
          {/* Changed icon */}
          <Typography variant="body2">Feeling/Activity</Typography>
        </Box>
        <Box className="flex items-center cursor-pointer">
          <Article className="mr-1 text-red-500" />
          <Typography variant="body2">Write article</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AddPostComponent;
