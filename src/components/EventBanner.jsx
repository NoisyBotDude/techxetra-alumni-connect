"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  CardContent,
  CardMedia,
  IconButton
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const EventBanner = (props) => {

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#1c1c1c",
          color: "#ffffff",
          borderRadius: 2,
          padding: 2,
          maxWidth: 900,
          margin: "0 auto",
          boxShadow: 3
        }}
      >
        {/* Poster */}
        <CardMedia
          component="img"
          image={props.imageUrl ||  "https://via.placeholder.com/300"}// Replace with the actual path to your event poster
          alt="Event Poster"
          sx={{ width: { xs: "100%", md: 300 }, borderRadius: 2 }}
        />

        {/* Event Details */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            ml: { md: 3 },
            mt: { xs: 2, md: 0 }
          }}
        >
          <CardContent sx={{ padding: 0 }}>
            {/* Title and Share Button */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#f5f5f5",
                  marginBottom: "10px"
                }}
              >
                {props.data?.title}
              </Typography>
              <IconButton color="primary" aria-label="share">
                <ShareIcon sx={{ color: "#f5f5f5" }} />
                <Typography sx={{ color: "#f5f5f5", ml: 0.5 }}>
                  Share
                </Typography>
              </IconButton>
            </Box>

            {/* Tags and Details */}
            <Box display="flex" gap={1} mb={2}>
              <Button
                variant="outlined"
                sx={{ color: "#ffffff", borderColor: "#ffffff" }}
              >
                {props.data?.location}
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "#ffffff", borderColor: "#ffffff" }}
              >
                {props.data?.language === "en" && "English"}
              </Button>
            </Box>

            <Typography variant="body2" sx={{ color: "#b0b0b0" }}>  
              {formatDate(props.data?.time?.start)} • {formatDate(props.data?.time?.end)} 
              <br />
              {props.data?.type}
            </Typography>

            {/* Register Button */}
            <Button
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#E91E63",
                color: "#ffffff",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#C2185B" }
              }}
            >
              Register
            </Button>
          </CardContent>
        </Box>
      </Box>

      {/* About Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#ffffff",
          borderRadius: 2,
          padding: 2,
          paddingTop: 5,
          maxWidth: 900,
          margin: "0 auto",
          boxShadow: 3
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#f5f5f5",
            marginBottom: "10px"
          }}
        >
          About
        </Typography>
        <Typography variant="body2" sx={{ color: "#b0b0b0" }}>
          {props.data?.description}
        </Typography>
      </Box>
    </>
  );
};

export default EventBanner;
