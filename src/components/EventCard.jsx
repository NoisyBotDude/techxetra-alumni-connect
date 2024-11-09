import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Link } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const contests = [
  {
    title: "Weekly Contest 291",
    date: "May 1, 2022",
    status: "Ended",
    imageUrl: "/path-to-image-1.jpg", // Replace with actual path to image
  },
  {
    title: "Weekly Contest 290",
    date: "Apr 24, 2022",
    status: "Ended",
    imageUrl: "/path-to-image-2.jpg", // Replace with actual path to image
  },
  {
    title: "Biweekly Contest 85",
    date: "Aug 20, 2022",
    status: "Ended",
    imageUrl: "/path-to-image-3.jpg", // Replace with actual path to image
  },
];

const ContestCard = ({ title, date, status, imageUrl }) => (
  <Card
    sx={{
      width: 300,
      backgroundColor: "#1c1c1c",
      borderRadius: 2,
      overflow: "hidden",
      boxShadow: 3,
    }}
  >
    <CardMedia
      component="img"
      image={imageUrl}
      
      alt={title}
      sx={{
        height: 140,
        filter: "brightness(0.8)",
      }}
    />
    <CardContent sx={{ backgroundColor: "#2e2e2e", color: "#ffffff", padding: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f5f5f5" }}>
        {title}
      </Typography>
      <Box display="flex" alignItems="center" gap={1} mt={1}>
        <AccessTimeIcon sx={{ color: "#f5f5f5", fontSize: 18 }} />
        <Typography variant="body2" color="#b0b0b0">
          {status} &nbsp; {date}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);



const EventPage = () => {
  return (
    
    <Box sx={{ backgroundColor: "#121212", padding: 4 }}>
      <Typography variant="h5" sx={{ color: "#f5f5f5", fontWeight: "bold" }}>Upcoming Event</Typography>
      <Grid container spacing={3}>
        <Grid item>
        <a href="/events/1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
         <ContestCard
            title="Weekly Contest 423"
            startTime="Sunday 8:00 AM GMT+5:30"
            countdown="14h 20m 52s"
            imageUrl="/path-to-image-1.jpg" // Replace with your actual image path
          />
          </a>
        </Grid>
        <Grid item>
        <a href="/events/1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
         <ContestCard
            title="Weekly Contest 423"
            startTime="Sunday 8:00 AM GMT+5:30"
            countdown="14h 20m 52s"
            imageUrl="/path-to-image-1.jpg" // Replace with your actual image path
          />
          </a>
        </Grid>
        <Grid item>
          <ContestCard
            title="Biweekly Contest 143"
            startTime="Saturday 8:00 PM GMT+5:30"
            countdown="2h 20m 52s"
            imageUrl="/path-to-image-2.jpg" // Replace with your actual image path
          />
        </Grid>
      </Grid>
     <Box sx={{ backgroundColor: "#121212", padding: 4 }}>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" sx={{ color: "#f5f5f5", fontWeight: "bold" }}>
          Featured Contests
        </Typography>
        
      </Box>

      {/* Contests Grid */}
      <Grid container spacing={3}>
        {contests.map((contest, index) => (
          <Grid item key={index}>
            <ContestCard
              title={contest.title}
              date={contest.date}
              status={contest.status}
              imageUrl={contest.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>

    </Box>
  );
};

export default EventPage;
