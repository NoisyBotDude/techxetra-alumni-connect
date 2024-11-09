"use client"

import React, { useEffect, useState } from "react";
import PostCard from "../../components/NewsCardComp";
import HashtagTrends from "../../components/hastags";
import Alumni from "../../components/ConnectAlumni";
import { Box } from "@mui/material";

export default function NewsUpdates() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const getAllNews = async () => {
      const response = await fetch("/api/news");
      const data = await response.json();
      console.log(data);
      setNews(data);
    }

    getAllNews();
  }, [])

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "250px 1fr 250px" }, // Single column on small screens, 3 columns on larger screens
        gap: 3,
        padding: 2,
        backgroundColor: "#121212", // Dark background to match the theme
        minHeight: "100vh"
      }}
    >
      {/* Hashtag Trends Sidebar */}
      <Box
        sx={{
          display: { xs: "none", md: "block" }, // Hide on small screens
          position: "sticky",
          top: 20 // Keeps it fixed as you scroll
        }}
      >
        <HashtagTrends />
      </Box>

      {/* Center News Feed */}
      <Box
        sx={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          overflowY: "auto", // Scrollable feed
          height: "100vh" // Scrollable feed
        }}
      >
        {
          news.map((post, index) => (
            <PostCard key={index} post={post} />
          ))
        }
      </Box>

      {/* Alumni Connect Sidebar */}
      <Box
        sx={{
          display: { xs: "none", md: "block" }, // Hide on small screens
          position: "sticky",
          mx: -10,
          top: 20 // Keeps it fixed as you scroll
        }}
      >
        <Alumni />
      </Box>
    </Box>
  );
}
