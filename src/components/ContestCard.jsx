import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const ContestCard = ({ title, startTime, countdown, imageUrl }) => {
  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 2,
        backgroundColor: "#1c1c1c",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      {/* Background Image */}
      <CardMedia
        component="img"
        image={imageUrl}
        alt="Event Background"
        sx={{
          height: 160,
          opacity: 0.9,
          filter: "brightness(0.7)",
        }}
      />
      
      {/* Top-right Icon */}
      <Box sx={{ position: "absolute", top: 10, right: 10 }}>
        <CalendarTodayIcon sx={{ color: "#ffffff" }} />
      </Box>
      
      {/* Countdown Overlay */}
      <Box sx={{ position: "absolute", top: 120, left: 20, display: "flex", alignItems: "center", gap: 1 }}>
        <AccessTimeIcon sx={{ color: "#ffffff" }} />
        <Typography variant="body2" color="#ffffff">
          Starts in {countdown}
        </Typography>
      </Box>

      {/* Event Details */}
      <CardContent sx={{ backgroundColor: "#2e2e2e", padding: 2, pt: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#b0b0b0", mt: 1 }}>
          {startTime}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContestCard;
