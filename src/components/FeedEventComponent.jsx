// components/EventCard.js
import { Card, CardContent, Typography, Box } from "@mui/material";

const FeedEventCard = ({ data }) => {
  return (
    <Card sx={{ backgroundColor: "#1E1E1E", color: "white" }}>
      <CardContent>
        <Typography variant="h6">{data.title}</Typography>
        <Typography variant="body2" color="gray">
          {data.date}
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