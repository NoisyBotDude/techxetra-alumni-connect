"use client";

import React, { useState, useRef } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  Paper,
  Box,
  Grid,
  Typography,
  Link
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4caf50"
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e"
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa"
    }
  }
});

export default function UserInfo() {
  const router = useRouter();
  const { user } = UserAuth();
  console.log(user);

  const selectRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    skills: "",
    interests: "",
    currentRole: "",
    company: "",
    experienceYears: "",
    industry: "",
    linkedIn: "",
    twitter: "",
    github: "",
    website: "",
    role: "student"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/users/${user.uid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          skills: formData.skills.split(","),
          interests: formData.interests.split(",")
        })
      });

      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          bio: "",
          skills: "",
          interests: "",
          currentRole: "",
          company: "",
          experienceYears: "",
          industry: "",
          linkedIn: "",
          twitter: "",
          github: "",
          website: "",
          role: "student"
        });
        router.push("/");
      } else {
        alert("Failed to save user information");
      }
    } catch (error) {
      console.error("Error saving user information:", error);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              //backgroundColor: "background.paper",
              padding: 3,
              borderRadius: 2
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Additional Information
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="first-name"
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    autoFocus
                    InputLabelProps={{
                      style: { color: "#b0b0b0" }
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="lastName"
                    label="Last Name"
                    type="text"
                    id="last-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    InputLabelProps={{
                      style: { color: "#b0b0b0" }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="bio"
                    label="Bio"
                    type="text"
                    id="bio"
                    multiline
                    rows={4}
                    value={formData.bio}
                    onChange={handleChange}
                    InputLabelProps={{
                      style: { color: "#b0b0b0" }
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="skills"
                    label="Skills (comma-separated)"
                    type="text"
                    id="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    InputLabelProps={{
                      style: { color: "#b0b0b0" }
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="interests"
                    label="Interests (comma-separated)"
                    type="text"
                    id="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    InputLabelProps={{
                      style: { color: "#b0b0b0" }
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="currentRole"
                    label="Current Role"
                    type="text"
                    id="current-role"
                    value={formData.currentRole}
                    onChange={handleChange}
                    InputLabelProps={{
                      style: { color: "#b0b0b0" }
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="company"
                    label="Company"
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    InputLabelProps={{
                      style: { color: "#b0b0b0" }
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="experienceYears"
                    label="Years of Experience"
                    type="number"
                    id="experience-years"
                    value={formData.experienceYears}
                    onChange={handleChange}
                    InputLabelProps={{
                      style: { color: "#b0b0b0" }
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="industry"
                    label="Industry"
                    type="text"
                    id="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    InputLabelProps={{
                      style: { color: "#b0b0b0" }
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "primary.main" }}
              >
                Submit Information
              </Button>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mt: 5 }}
              >
                {"Copyright © "}
                <Link color="inherit" href="https://mui.com/">
                  Your Website
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
