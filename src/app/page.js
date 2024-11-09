"use client";

import React, { useState, useEffect } from "react";
import AddPost from "@/components/AddPost";
import PersonalInfoSidebar from "@/components/SideInfo";
import PersonalInfoPost from "@/components/PostComponent";
import { Box, Grid } from "@mui/material";

export default function HomePage() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    if (!user_id) {
      router.push("/login");
    }

    const getUser = async () => {
      try {
        const response = await fetch(`/api/users/${user_id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        console.log("User data:", data);
        setUserData(data);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    getUser();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {/* Left Sidebar */}
        <Grid item xs={6} md={6} lg={3}>
          <PersonalInfoSidebar data={userData?.user} />
        </Grid>

        {/* Main Content Area */}
        <Grid item xs={6} md={6} lg={6}>
          <Box mb={3} md={6}>
            <AddPost />
          </Box>
          <Box>
            <PersonalInfoPost />
            <PersonalInfoPost />
            <PersonalInfoPost />
            <PersonalInfoPost />
          </Box>
        </Grid>

        {/* Empty Third Column */}
        <Grid item xs={0} md={0} lg={3} />
      </Grid>
    </Box>
  );
}
