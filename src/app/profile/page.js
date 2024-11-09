"use client";
import React from "react";
import BasicInfo from "../../components/BasicUserInfo";
import Skills from "../../components/SkillsUser";
import BasicInformation from "../../components/BasicInfoRight";
import Experience from "../../components/ExperienceComp";
import { Box, Grid, Button } from "@mui/material";

export default function UserDetails() {
  const handleEditProfile = () => {
    // Implement the logic for editing the profile, such as opening an edit modal or navigating to an edit page.
    console.log("Edit Profile button clicked");
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <Box mb={4}>
            <BasicInfo />
          </Box>
          <Box>
            <Skills />
          </Box>
          {/* Edit Profile Button */}
          <Box mt={4} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditProfile}
              sx={{ backgroundColor: "#4F86F7" }}
            >
              Edit Profile
            </Button>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={8}>
          <Box mb={4}>
            <BasicInformation />
          </Box>
          <Experience />
        </Grid>
      </Grid>
    </Box>
  );
}
