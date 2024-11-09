import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Link } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventCountdown from "./EventCountdown";

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

const ContestCard = ({ title, date, type, imageUrl }) => (
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
        <EventCountdown start={date} />
      </Box>
    </CardContent>
  </Card>
);



const EventPage = (props) => {
  return (
    <Box sx={{ backgroundColor: "#121212", padding: 4, width: 900 }}>
      <Typography variant="h5" sx={{ color: "#f5f5f5", fontWeight: "bold" }} mb={3}>Upcoming Event</Typography>
      <Grid container spacing={3}>
        {props.upcomingEvents.map((event, index) => {
          return (
            <Grid item key={index}>
              <a href={`/events/${event?.eventId}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <ContestCard
                  title={event?.title}
                  date={event.time.start}
                  type={event?.type}
                  imageUrl="/path-to-image-1.jpg" // Replace with your actual image path
                />
              </a>
            </Grid>
          )
        })}
      </Grid>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} mt={3}>
        <Typography variant="h5" sx={{ color: "#f5f5f5", fontWeight: "bold" }}>
          Featured Contests
        </Typography>

      </Box>

      {/* Contests Grid */}
      <Grid container spacing={3}>
        {props.featuredContests.map((contest, index) => (
          <Grid item key={index}>
            <ContestCard
              title={contest?.title}
              date={contest?.time.start}
              type={contest?.type}
              imageUrl={contest.imageUrl}
            />
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default EventPage;
