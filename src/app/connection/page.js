"use client";

import React, { useState, useEffect } from "react";
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

export default function ConnectionList() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [connections, setConnections] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchConnections();
    const user_id = localStorage.getItem("user_id");
    if (!user_id) {
      router.push("/signin");
    }

    const getUser = async () => {
      try {
        const response = await fetch(`/api/users/${user_id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        console.log("User data:", data);
        setUserData(data.user[0]);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    getUser();
  }, []);

  const fetchConnections = async () => {
    const userId = localStorage.getItem('user_id');
    try {
      const response = await fetch(`/api/connection/${userId}`); // Replace USER_ID with actual user ID
      const data = await response.json();
      setConnections(data);
    } catch (error) {
      console.error('Error fetching connections:', error);
    }
  };

  const handleSendRequest = async (receiverId) => {
    try {
      const response = await fetch('/api/connection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ senderId: 'USER_ID', receiverId }) // Replace USER_ID
      });
      if (response.ok) {
        console.log('Connection request sent');
      } else {
        console.error('Failed to send connection request');
      }
    } catch (error) {
      console.error('Error sending connection request:', error);
    }
  };

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
        <Grid item xs={12} md={3}>
          <Box sx={{ position: "sticky", top: 20 }}>
          {userData && <PersonalInfoSidebar data={userData} />}
          </Box>
        </Grid>

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
              {connections.length} Connections
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
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
            </Box>

            {connections.map((connection, index) => (
              <Box key={index} mb={2}>
                <Grid container alignItems="center">
                  <Grid item xs={2}>
                    <Avatar src={connection.sender.profileImage} sx={{ width: 48, height: 48, bgcolor: "#4B5563" }} />
                  </Grid>
                  <Grid item xs={7}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "white" }}
                    >
                      {connection.sender.firstName} {connection.sender.lastName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#B0BEC5" }}>
                      {connection.sender.role}
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
                      onClick={() => handleSendRequest(connection.receiverId)}
                    >
                      Connect
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
                      <MenuItem onClick={handleClose}>Remove Connection</MenuItem>
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

        <Grid item xs={12} md={3}>
          <Box sx={{ position: "sticky", top: 20 }}>
            {
              userData && <Alumni userId={userData?.userId}/>
            }
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}