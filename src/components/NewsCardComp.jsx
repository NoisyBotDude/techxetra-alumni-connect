"use client";
import React from "react";
import { Favorite, Comment, Replay, Send } from "@mui/icons-material";
import {
  Box,
  Typography,
  Avatar,
  Chip,
  Button,
  IconButton,
  Tooltip
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PersonIcon from "@mui/icons-material/Person";

const PostCard = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        color: "#FFFFFF",
        borderRadius: 2,
        p: 3,
        mb: 3,
        maxWidth: 600,
        boxShadow: 3
      }}
    >
      {/* Post Title and Tag */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontWeight="bold" color="#FFFFFF">
          {props.post?.title}
        </Typography>
            <Chip
              label={props.post?.tags[0]}
              sx={{ backgroundColor: "#b794f4", color: "#fff", fontWeight: "bold" }}
              
            />
      </Box>

      {/* User Info */}
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar
          src="/path-to-avatar.jpg"
          alt="Elisabeth May"
          sx={{ width: 50, height: 50, mr: 2 }}
        />
        <Box>
          <Typography variant="body1" fontWeight="bold" color="#f5f5f5">
            {props.post?.authors[0]?.firstName} {props.post?.authors[0]?.lastName}
          </Typography>
          <Typography variant="body2" color="#b0b0b0">
            {/* 6h ago */}
            {new Date(props.post?.createdAt).toLocaleString()} 
          </Typography>
        </Box>
      </Box>

      <a href={`/news-and-updates/${props.post.newsId}`} rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <Typography variant="body1" color="#f5f5f5" mb={2} sx={{ width: 600}}>
          {props.post?.content}
        </Typography>
      </a>
      {/* Message Content */}

      {/* Action and Response Section */}
      <Box className="w-full flex justify-between text-gray-400">
        <Box className="flex items-center cursor-pointer">
          <IconButton className="text-red-500">
            <Favorite />
          </IconButton>
          <Typography variant="body2">Like(100)</Typography>
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

export default PostCard;
