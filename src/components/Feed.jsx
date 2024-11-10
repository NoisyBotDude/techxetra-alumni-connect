// components/Feed.js
import React, { useEffect, useState } from "react";
import FeedEventCard from "./FeedEventComponent";
import FeedNewsCard from "./FeedNewsComponent";
import FeedJobCard from "./FeedJobCard";
import FeedPostCard from "./FeedPostCard";
import { Box, Typography } from "@mui/material";

const Feed = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/feed");
        const data = await response.json();
        setFeedData(data.feedData);
        console.log("Feed data:", data);
      } catch (error) {
        console.error("Failed to fetch feed data:", error);
      }
    };
    fetchData();
  }, []);

  const renderFeedItem = (item) => {
    switch (item._typename) {
      case "News":
        return <FeedNewsCard key={item.newsId} data={item} />;
      case "Event":
        return <FeedEventCard key={item.eventId} data={item} />;
      case "Job":
        return <FeedJobCard key={item.jobId} data={item} />;
      case "Content":
        return <FeedPostCard key={item.contentId} data={item} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {feedData && feedData?.length > 0 ? (
        feedData?.map((item) => renderFeedItem(item))
      ) : (
        <Typography variant="h6" color="gray">
          Loading feed...
        </Typography>
      )}
    </Box>
  );
};

export default Feed;