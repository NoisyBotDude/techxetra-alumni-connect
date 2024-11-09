'use client'
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1F2937", padding: 1 }}>
      <Toolbar>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
          <Typography variant="h6" sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
            GradCircle
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ flexGrow: 1, display: "flex", gap: 3 }}>
          <Typography variant="body1" sx={{ color: "#A1A1A1" }}>
            Jobs
          </Typography>
          <Typography variant="body1" sx={{ color: "#A1A1A1" }}>
            Events
          </Typography>
          <Typography variant="body1" sx={{ color: "#A1A1A1" }}>
            Connections
          </Typography>
          <Typography variant="body1" sx={{ color: "#A1A1A1" }}>
            News 
          </Typography>
          <Typography variant="body1" sx={{ color: "#A1A1A1" }}>
            Jobs
          </Typography>
        </Box>

        {/* Sign In and Sign Up Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<LoginIcon />}
            sx={{
              color: "#FFFFFF",
              borderColor: "#6366F1",
              "&:hover": {
                borderColor: "#A5B4FC",
              },
            }}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            startIcon={<PersonAddIcon />}
            sx={{
              backgroundColor: "#6366F1",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#4F46E5",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
