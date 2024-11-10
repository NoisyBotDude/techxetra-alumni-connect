"use client"

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Card,
  CardContent,
  Grid,
  Avatar
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";

const JobSearchPage = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    fetchJobs(); // Fetch jobs when component mounts
  }, []);

  // Fetch all jobs
  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      const data = await response.json();
      setJobs(data.jobs);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    }
  };

  // Search jobs based on query and location
  const searchJobs = async () => {
    try {
      const response = await fetch(`/api/jobs/search?query=${searchQuery}&location=${locationFilter}`);
      const data = await response.json();
      setJobs(data.jobs);
    } catch (error) {
      console.error("Failed to search jobs:", error);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh",
        p: 4
      }}
    >
      {/* Job Search Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" sx={{ fontWeight: "bold", color: "white" }}>
          Find your{" "}
          <span
            style={{
              backgroundColor: "#3B82F6",
              color: "white",
              padding: "0 8px",
              borderRadius: "4px"
            }}
          >
            dream jobs
          </span>{" "}
          with
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "white", mt: 1 }}
        >
          Your Alumni
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#B0BEC5", mt: 2, mb: 4, maxWidth: "600px", mx: "auto" }}
        >
          When you're searching for a job, there are a few things you can do to
          get the most out of your search
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "600px",
            mx: "auto",
            mb: 5
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Job title or keyword"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton sx={{ color: "#3B82F6" }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                color: "white",
                backgroundColor: "#1E1E1E",
                borderRadius: "30px"
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
            startIcon={<LocationOnIcon />}
            sx={{
              color: "#B0BEC5",
              fontWeight: "bold",
              ml: 2,
              backgroundColor: "#2C2C2C",
              borderRadius: "30px",
              px: 3,
              textTransform: "none"
            }}
            onClick={searchJobs}
          >
            Any location
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {/* Job Categories Sidebar */}
        <Grid item xs={12} md={3}>
          <Box sx={{ backgroundColor: "#1E1E1E", borderRadius: 2, p: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "white", mb: 2 }}
            >
              Jobs Categories
            </Typography>
            {[
              "Automotive",
              "Health and care",
              "Construction",
              "Fitness Trainer",
              "Industry"
            ].map((category, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <WorkIcon sx={{ color: "#F59E0B", mr: 1 }} />
                <Typography variant="body1" sx={{ color: "white" }}>
                  {category}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#B0BEC5", ml: "auto" }}
                >
                  {Math.floor(Math.random() * 5) + 1} Openings
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Recommended Jobs Main Content */}
        <Grid item xs={12} md={9}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              Recommended Jobs
            </Typography>
            <Box>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3B82F6", mr: 1 }}
                onClick={fetchJobs} // Reload all jobs on button click
              >
                Latest Job
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "#3B82F6", borderColor: "#3B82F6" }}
              >
                Premium Jobs
              </Button>
            </Box>
          </Box>
          <Grid container spacing={3}>
            {jobs.map((job, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: "#1E1E1E",
                    color: "white",
                    borderRadius: 2,
                    height: "100%"
                  }}
                >
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <Typography variant="caption" sx={{ color: "#B0BEC5" }}>
                        Type: {job.jobType} | Posted: {new Date(job.createdAt).toLocaleDateString()}
                      </Typography>
                      <IconButton sx={{ color: "#F87171" }}>
                        <WorkIcon />
                      </IconButton>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#3B82F6", mb: 1 }}
                    >
                      {job.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#B0BEC5", mb: 1 }}
                    >
                      {job.salary} / Yearly
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#6B7280" }}>
                      {job.location}
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 2,
                        backgroundColor: "#3B82F6",
                        color: "white",
                        textTransform: "none",
                        borderRadius: "20px"
                      }}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobSearchPage;