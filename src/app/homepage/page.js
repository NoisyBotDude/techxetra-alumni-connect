"use client";

import React from "react";
import AddPost from "@/components/AddPost";
import PersonalInfoSidebar from "@/components/SideInfo";
import PersonalInfoPost from "@/components/PostComponent";
import { Box, Grid } from "@mui/material";

export default function HomePage() {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {/* Left Sidebar */}
        <Grid item xs={6} md={6} lg={3}>
          <PersonalInfoSidebar />
        </Grid>

        {/* Main Content Area */}
        <Grid item xs={6} md={6} lg={3}>
          <Box mb={3}>
            <AddPost />
          </Box>
          <Box>
            <PersonalInfoPost />
          </Box>
        </Grid>

        {/* Empty Third Column */}
        <Grid item xs={0} md={0} lg={3} />
      </Grid>
    </Box>
  );
}
