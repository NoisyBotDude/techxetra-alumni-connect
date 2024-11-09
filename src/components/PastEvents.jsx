'user Client'
import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button, Tab, Tabs, Pagination } from "@mui/material";
import { styled } from "@mui/system";

const contests = [
  { title: "Weekly Contest 422", date: "Nov 3, 2024 8:00 AM GMT+5:30", imageUrl: "/path-to-image-1.jpg", type: "Virtual" },
  { title: "Weekly Contest 421", date: "Oct 27, 2024 8:00 AM GMT+5:30", imageUrl: "/path-to-image-1.jpg", type: "Virtual" },
  { title: "Biweekly Contest 142", date: "Oct 26, 2024 8:00 PM GMT+5:30", imageUrl: "/path-to-image-2.jpg", type: "Virtual" },
  { title: "Weekly Contest 420", date: "Oct 20, 2024 8:00 AM GMT+5:30", imageUrl: "/path-to-image-1.jpg", type: "Virtual" },
  { title: "Weekly Contest 419", date: "Oct 13, 2024 8:00 AM GMT+5:30", imageUrl: "/path-to-image-1.jpg", type: "Virtual" },
  { title: "Biweekly Contest 141", date: "Oct 12, 2024 8:00 PM GMT+5:30", imageUrl: "/path-to-image-2.jpg", type: "Virtual" },
  { title: "Weekly Contest 418", date: "Oct 6, 2024 8:00 AM GMT+5:30", imageUrl: "/path-to-image-1.jpg", type: "Virtual" },
  { title: "Weekly Contest 417", date: "Sep 29, 2024 8:00 AM GMT+5:30", imageUrl: "/path-to-image-1.jpg", type: "Virtual" },
  { title: "Biweekly Contest 140", date: "Sep 28, 2024 8:00 PM GMT+5:30", imageUrl: "/path-to-image-2.jpg", type: "Virtual" },
  { title: "Weekly Contest 416", date: "Sep 22, 2024 8:00 AM GMT+5:30", imageUrl: "/path-to-image-1.jpg", type: "Virtual" },
];

const StyledTab = styled(Tab)({
  color: "#ffffff",
  "&.Mui-selected": {
    color: "#000000",
    backgroundColor: "#A1A1A1",
  },
});

const ContestList = (props) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "#121212", color: "#ffffff", p: 4, borderRadius: 2 }}>
      {/* Tabs Section */}
      <Tabs value={selectedTab} onChange={handleTabChange} indicatorColor="primary" sx={{ mb: 2 }}>
        <StyledTab label="Past Contests" />
        <StyledTab label="My Contests" />
      </Tabs>
      
      {/* Contest List */}
      {props.pastEvents.map((contest, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1E1E1E",
            mb: 2,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <CardMedia
            component="img"
            image={contest.imageUrl}
            alt={contest.title}
            sx={{ width: 80, height: 80, borderRadius: 2 }}
          />
          <CardContent sx={{ flex: 1, pl: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ffffff" }}>
              {contest.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#B0B0B0" }}>
              {contest.date}
            </Typography>
          </CardContent>
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "#B794F4",
              borderColor: "#B794F4",
              fontWeight: "bold",
              marginRight: 2,
            }}
          >
            {contest.type}
          </Button>
        </Card>
      ))}

      {/* Pagination */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination count={10} variant="outlined" shape="rounded" sx={{ "& .MuiPaginationItem-root": { color: "#ffffff" } }} />
      </Box>
    </Box>
  );
};

export default ContestList;
