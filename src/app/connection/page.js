"use client";

import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Menu,
  MenuItem
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Alumni from "../../components/ConnectAlumni";
import PersonalInfoSidebar from "../../components/SideInfo";

const connections = [
  {
    name: "Sakshi Singh",
    role: "Student",
    connected: "Connected 12 minutes ago",
    avatar: "/path-to-avatar1.jpg" // Replace with actual image path
  },
  {
    name: "Sakshi Singh",
    role: "Student",
    connected: "Connected 12 minutes ago",
    avatar: "/path-to-avatar1.jpg" // Replace with actual image path
  },
  {
    name: "Sakshi Singh",
    role: "Student",
    connected: "Connected 12 minutes ago",
    avatar: "/path-to-avatar1.jpg" // Replace with actual image path
  },
  {
    name: "Sakshi Singh",
    role: "Student",
    connected: "Connected 12 minutes ago",
    avatar: "/path-to-avatar1.jpg" // Replace with actual image path
  },
  {
    name: "Sakshi Singh",
    role: "Student",
    connected: "Connected 12 minutes ago",
    avatar: "/path-to-avatar1.jpg" // Replace with actual image path
  },
  {
    name: "Rohit Sharma",
    role: "Pursuing B.Tech in CSE @1st year || Tezpur University",
    connected: "Connected 3 weeks ago",
    avatar: "/path-to-avatar2.jpg"
  }
  // Add more connections here...
];

export default function ConnectionList() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh"
      }}
    >
      <Grid container spacing={2}>
        {/* Left Sidebar - PersonalInfoSidebar */}
        <Grid item xs={12} md={3}>
          <Box sx={{ position: "sticky", top: 20 }}>
            <PersonalInfoSidebar />
          </Box>
        </Grid>

        {/* Center - Connection List */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#1E1E1E",
              color: "white",
              padding: 3,
              borderRadius: 2
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              397 Connections
            </Typography>

            {/* Top Controls */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Box display="flex" alignItems="center">
                <Typography variant="body2" sx={{ color: "#B0BEC5", mr: 1 }}>
                  Sort by:
                </Typography>
                <Button
                  endIcon={<ArrowDropDownIcon />}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    backgroundColor: "#1E1E1E",
                    padding: "5px 15px",
                    borderRadius: "20px"
                  }}
                >
                  Recently added
                </Button>
              </Box>
              <TextField
                variant="outlined"
                placeholder="Search by name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#3B82F6" }} />
                    </InputAdornment>
                  ),
                  sx: {
                    color: "white",
                    backgroundColor: "#1E1E1E",
                    borderRadius: "20px"
                  }
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#3B82F6" },
                    "&:hover fieldset": { borderColor: "#3B82F6" },
                    "&.Mui-focused fieldset": { borderColor: "#3B82F6" }
                  }
                }}
              />
              <Button
                sx={{
                  color: "#3B82F6",
                  fontWeight: "bold",
                  textTransform: "none",
                  ml: 2
                }}
              >
                Search with filters
              </Button>
            </Box>

            {/* Connection List */}
            {connections.map((connection, index) => (
              <Box key={index} mb={2}>
                <Grid container alignItems="center">
                  <Grid item xs={2}>
                    <Avatar
                      src={connection.avatar}
                      sx={{ width: 48, height: 48, bgcolor: "#4B5563" }}
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "white" }}
                    >
                      {connection.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#B0BEC5" }}>
                      {connection.role}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#6B7280" }}>
                      {connection.connected}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#3B82F6",
                        color: "#3B82F6",
                        textTransform: "none",
                        borderRadius: "20px"
                      }}
                    >
                      Message
                    </Button>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton onClick={handleClick}>
                      <MoreVertIcon sx={{ color: "#B0BEC5" }} />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      sx={{
                        "& .MuiPaper-root": {
                          backgroundColor: "#1E1E1E",
                          color: "white"
                        }
                      }}
                    >
                      <MenuItem onClick={handleClose}>View Profile</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Remove Connection
                      </MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
                {index < connections.length - 1 && (
                  <Divider sx={{ backgroundColor: "#424242", my: 2 }} />
                )}
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Right Sidebar - Alumni */}
        <Grid item xs={12} md={3}>
          <Box sx={{ position: "sticky", top: 20 }}>
            <Alumni />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
