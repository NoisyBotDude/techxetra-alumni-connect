// components/EventCard.js
import { Card, CardContent, Typography, Box } from "@mui/material";

const FeedEventCard = ({ data }) => {

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
    <Card sx={{ backgroundColor: "#1E1E1E", color: "white" }}>
      <CardContent>
        <Typography variant="h6">{data.title}</Typography>
        <Typography variant="body2" color="gray">
          {formatDate(data.time.start)} - {formatDate(data.time.end)}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {data.description}
        </Typography>
        <Typography variant="body2" color="gray">
          Location: {data.location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeedEventCard;