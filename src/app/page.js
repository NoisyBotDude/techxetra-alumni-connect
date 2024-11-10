"use client";

import React, { useState, useEffect } from "react";
import AddPost from "@/components/AddPost";
import PersonalInfoSidebar from "@/components/SideInfo";
import PersonalInfoPost from "@/components/PostComponent";
import Alumni from "../components/ConnectAlumni";
import SignInCard from "../components/SideInfoNoLogin";
import { Box, Grid } from "@mui/material";

export default function HomePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
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

  return (
    <Box sx={{ padding: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "250px 1fr 250px" },
          gap: 3
        }}
      >
        {/* Left Sidebar (Fixed) */}
        <Box
          sx={{
            position: "sticky",
            top: 20,
            height: "100vh",
            overflowY: "auto"
          }}
        >
          {userData && <PersonalInfoSidebar data={userData} />}
          {!userData && <SignInCard />}
        </Box>

        {/* Main Content Area (Center, scrollable posts) */}
        <Box
          sx={{
            overflowY: "auto",
            maxHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "800px"
          }}
        >
          <Box mb={3}>
            <AddPost data={userData?.user} />
          </Box>
          <Box>
            <PersonalInfoPost />
            <PersonalInfoPost />
            <PersonalInfoPost />
            <PersonalInfoPost />
          </Box>
        </Box>

        {/* Right Sidebar (Fixed) */}
        <Box
          sx={{
            position: "sticky",
            top: 20,
            height: "100vh",
            width: "250px",
          }}
        >
          {
              userData && <Alumni userId={userData?.userId}/>
            }
        </Box>
      </Grid>
    </Box>
  );
}
