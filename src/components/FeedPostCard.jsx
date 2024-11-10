// components/PostCard.js
import { Card, CardContent, Typography, Box } from "@mui/material";

const FeedPostCard = ({ data }) => (
  <Card sx={{ backgroundColor: "#1E1E1E", color: "white" }}>
    <CardContent>
      <Typography variant="h6">{data.title}</Typography>
      <Typography variant="body2" color="gray">
        By {data.author} - {new Date(data.createdAt).toLocaleDateString()}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {data.body}
      </Typography>
    </CardContent>
  </Card>
);

export default FeedPostCard;