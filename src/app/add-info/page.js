"use client";

import React, { useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const defaultTheme = createTheme();

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
    rememberMe: false,
    role: "student" // default to "student" or "alumni" if preferred
  });

  const handleChange = (e) => {
    console.log(e);
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  console.log(formData);

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
    <ThemeProvider theme={defaultTheme}>
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
              alignItems: "center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
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
                rowSpacing={1}
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
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="linkedIn"
                    label="LinkedIn Profile"
                    type="url"
                    id="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="twitter"
                    label="Twitter Profile"
                    type="url"
                    id="twitter"
                    value={formData.twitter}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="github"
                    label="GitHub Profile"
                    type="url"
                    id="github"
                    value={formData.github}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="website"
                    label="Personal Website"
                    type="url"
                    id="website"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    {/* <Select
                      labelId="role-label"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      label="Role"
                      ref={selectRef}
                    >
                      <MenuItem value="student">Student</MenuItem>
                      <MenuItem value="alumni">Alumni</MenuItem>
                    </Select> */}
                    <TextField
                      margin="normal"
                      fullWidth
                      name="role"
                      label="Role"
                      type="text"
                      id="role"
                      value={formData.role}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <div className="flex items-center justify-center ">
                <Button
                  type="submit"
                  justify-content="center"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit Information
                </Button>
              </div>
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
