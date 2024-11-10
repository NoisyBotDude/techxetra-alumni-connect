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
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const popularUsers = [
  {
    name: "Geetanjali",
    role: "Technical Content Writer",
    followers: "168 Followers",
    posts: "87 Posts",
    initials: "G",
    color: "#FDE68A"
  },
  {
    name: "Afifa",
    role: "Writer",
    followers: "7 Followers",
    posts: "53 Posts",
    initials: "A",
    color: "#BFDBFE"
  },
  {
    name: "divya maximize",
    role: "Community Member",
    followers: "13 Followers",
    posts: "41 Posts",
    initials: "D",
    color: "#FECACA"
  },
  {
    name: "fatima khatun",
    role: "College",
    followers: "5 Followers",
    posts: "38 Posts",
    initials: "F",
    color: "#FED7AA"
  },
  {
    name: "ActowizSolutions",
    role: "Web Scraping Services",
    followers: "3 Followers",
    posts: "26 Posts",
    initials: "A",
    color: "#C7D2FE"
  }
];

export default function Alumni() {
  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        color: "#fff",
        borderRadius: 2,
        p: 3,
        width: 320,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        marginRight: "30px"
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          Popular Around You
        </Typography>
        <Box component="span" sx={{ color: "orange", fontSize: "1.25rem", ml: 1 }}>
          🔥
        </Box>
      </Box>

      {/* User List */}
      <List>
        {popularUsers.map((user, index) => (
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
              {/* User Initials Avatar */}
              <Avatar
                sx={{
                  bgcolor: user.color,
                  width: 40,
                  height: 40,
                  mr: 2,
                  color: "#1e1e1e",
                  fontWeight: "bold"
                }}
              >
                {user.initials}
              </Avatar>

              {/* User Name and Stats */}
              <Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="#ffffff"
                  sx={{ fontSize: "1rem" }}
                >
                  {user.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="#9c9c9c"
                  sx={{ fontSize: "0.85rem" }}
                >
                  {user.role}
                </Typography>
                <Box display="flex" gap={1} mt={0.5}>
                  <Chip
                    label={user.followers}
                    sx={{
                      backgroundColor: "#333",
                      color: "#9c9c9c",
                      fontSize: "0.75rem",
                      height: 24
                    }}
                    size="small"
                  />
                  <Chip
                    label={user.posts}
                    sx={{
                      backgroundColor: "#333",
                      color: "#9c9c9c",
                      fontSize: "0.75rem",
                      height: 24
                    }}
                    size="small"
                  />
                </Box>
              </Box>
            </Box>

            {/* Follow Button */}
            <IconButton
              sx={{
                color: "#4caf50",
                transition: "color 0.3s",
                "&:hover": {
                  color: "#66bb6a"
                }
              }}
            >
              <PersonAddIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}