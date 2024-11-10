

// components/NewsCard.js
"use client";
import React from "react";
import { Favorite, Comment, Replay, Send } from "@mui/icons-material";
import { Box, Typography, Avatar, IconButton, Card, CardContent, Chip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const FeedNewsCard = ({ data }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#1E1E1E",
        color: "white",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
        mb: 3,
      }}
    >
      <CardContent>
        {/* Header with News Title and Tag */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight="bold">
            {data?.title}
          </Typography>
          {data?.tags && data.tags[0] && (
            <Chip
              label={data.tags[0]}
              sx={{ backgroundColor: "#b794f4", color: "white", fontWeight: "bold" }}
            />
          )}
        </Box>

        {/* News Information */}
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar
            src={data?.authorAvatar || "/default-avatar.png"}
            alt={data?.authorName || "Author"}
            sx={{ width: 50, height: 50, mr: 2 }}
          />
          <Box>
            <Typography variant="body1" fontWeight="bold">
              {data?.authorName || "News Author"}
            </Typography>
            <Typography variant="body2" color="gray">
              {new Date(data?.createdAt).toLocaleString()}
            </Typography>
          </Box>
        </Box>

        {/* News Content */}
        <Typography variant="body1" color="#f5f5f5" mb={2}>
          {data?.description}
        </Typography>

        {/* Action Buttons */}
        <Box display="flex" justifyContent="space-between" textAlign="center" color="gray.400">
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
            <Typography variant="body2">Share</Typography>
          </Box>
          <Box className="flex items-center cursor-pointer">
            <IconButton className="text-gray-400">
              <Send />
            </IconButton>
            <Typography variant="body2">Send</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeedNewsCard;