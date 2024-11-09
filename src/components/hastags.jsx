import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Chip,
  List,
  ListItem,
  Avatar
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TagIcon from "@mui/icons-material/Tag";

const trends = [
  {
    hashtag: "experiences",
    following: "124.3K Following",
    posts: "9.7K Posts"
  },
  {
    hashtag: "interviewexperiences",
    following: "1.9K Following",
    posts: "3.6K Posts"
  },
  { hashtag: "news", following: "7.8K Following", posts: "3.1K Posts" },
  { hashtag: "gblog", following: "93 Following", posts: "1.6K Posts" },
  { hashtag: "experiences_qna", following: "52 Following", posts: "614 Posts" }
];

export default function HashtagTrends() {
  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        color: "#fff",
        borderRadius: 2,
        p: 3,
        width: 320,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          News and Tags
        </Typography>
        <Box component="span" sx={{ color: "green", fontSize: "1.25rem", ml: 1 }}>
          📈
        </Box>
      </Box>

      {/* Trend List */}
      <List>
        {trends.map((trend, index) => (
          <ListItem
            key={index}
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1,
              px: 0,
              "&:hover": {
                backgroundColor: "#2c2c2c",
                borderRadius: 1
              }
            }}
          >
            <Box display="flex" alignItems="center">
              {/* Hashtag Icon */}
              <Avatar sx={{ bgcolor: "#333", width: 32, height: 32, mr: 2 }}>
                <TagIcon sx={{ color: "#9c9c9c" }} />
              </Avatar>

              {/* Hashtag Name and Stats */}
              <Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="#ffffff"
                  sx={{ fontSize: "1rem" }}
                >
                  {trend.hashtag}
                </Typography>
                <Box display="flex" gap={1} mt={0.5}>
                  <Chip
                    label={trend.following}
                    sx={{
                      backgroundColor: "#333",
                      color: "#b0b0b0",
                      fontSize: "0.75rem",
                      height: 24
                    }}
                    size="small"
                  />
                  <Chip
                    label={trend.posts}
                    sx={{
                      backgroundColor: "#333",
                      color: "#b0b0b0",
                      fontSize: "0.75rem",
                      height: 24
                    }}
                    size="small"
                  />
                </Box>
              </Box>
            </Box>

            {/* Add Button */}
            <IconButton
              sx={{
                color: "#4caf50",
                transition: "color 0.3s",
                "&:hover": {
                  color: "#66bb6a"
                }
              }}
            >
              <AddIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}