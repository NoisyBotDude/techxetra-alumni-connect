import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Link } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventCountdown from "./EventCountdown";

const ContestCard = ({ title, date, description, type, imageUrl }) => (
  <Card
    sx={{
      width: 300,
      backgroundColor: "#1c1c1c",
      borderRadius: 2,
      overflow: "hidden",
      boxShadow: 3,
      transition: "transform 0.3s",
      "&:hover": {
        transform: "scale(1.05)"
      }
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
      <Typography variant="body2" sx={{ color: "#bbbbbb", mb: 1 }}>
        {description}
      </Typography>
      <Box display="flex" alignItems="center" gap={1} mt={1}>
        <AccessTimeIcon sx={{ color: "#f5f5f5", fontSize: 18 }} />
        <EventCountdown start={date} />
      </Box>
      <Typography variant="body2" sx={{ color: "#888", mt: 1 }}>
        Type: {type}
      </Typography>
    </CardContent>
  </Card>
);

const EventPage = ({ upcomingEvents, featuredContests }) => {
  return (
    <Box sx={{ backgroundColor: "#121212", padding: 4, maxWidth: 1200, width: 1000 }}>
      {/* Upcoming Events Section */}
      <Typography variant="h5" sx={{ color: "#f5f5f5", fontWeight: "bold", mb: 3 }}>
        Upcoming Events
      </Typography>
      <Grid container spacing={3}>
        {upcomingEvents.map((event, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Link href={`/events/${event?.eventId}`} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: "none" }}>
              <ContestCard
                title={event?.title}
                date={event?.time?.start}
                description={event?.description}
                type={event?.type}
                imageUrl={event.imageUrl || "https://via.placeholder.com/300"}
              />
            </Link>
          </Grid>
        ))}
      </Grid>

      {/* Featured Contests Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={5} mb={3}>
        <Typography variant="h5" sx={{ color: "#f5f5f5", fontWeight: "bold" }}>
          Featured Contests
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {featuredContests.map((contest, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ContestCard
              title={contest?.title}
              date={contest?.time.start}
              description={contest?.description}
              type={contest?.type}
              imageUrl={contest.imageUrl || "https://via.placeholder.com/300"}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventPage;