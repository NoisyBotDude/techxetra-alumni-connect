"user client";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  Paper,
  Chip
} from "@mui/material";
import { LocationOn, Email, Star, People } from "@mui/icons-material";

const AlumniInfoPage = () => {
  const alumniData = {
    name: "Dharmesh Shah",
    title: "Founder and CTO at HubSpot",
    location: "Boston, MA, United States",
    followers: 440,
    following: 31,
    karma: 2346,
    skills: ["Inbound Marketing", "Entrepreneurship", "Growth Marketing"],
    bio: "Career startup guy. Author of the book 'Inbound Marketing'. Founder of HubSpot, a venture-backed software startup. HubSpot offers the industry's first inbound marketing system for small businesses. The software is available as a hosted service (SaaS).",
    badges: [
      { name: "Power User", icon: "⚡️" },
      { name: "Top 10%", icon: "🔥" },
      { name: "HubSpot Certification", icon: "🏆" },
      { name: "Google Analytics Connected", icon: "📊" }
    ]
  };

  return (
    <Box className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-8">
      <Paper
        elevation={3}
        className="w-full max-w-4xl p-6 bg-gray-800 rounded-lg shadow-lg"
      >
        <Box className="flex flex-col items-center mb-6">
          <Avatar src="/path-to-avatar.jpg" sx={{ width: 120, height: 120 }} />
          <Typography variant="h4" className="mt-4 font-semibold text-white">
            {alumniData.name}
          </Typography>
          <Typography variant="body1" className="text-blue-400 mt-2">
            {alumniData.title}
          </Typography>
          <Box className="flex items-center text-gray-400 mt-1">
            <LocationOn fontSize="small" />
            <Typography variant="body2" className="ml-1">
              {alumniData.location}
            </Typography>
          </Box>
        </Box>

        <Box className="flex justify-center space-x-6 mb-6">
          <Chip
            label={`${alumniData.karma} Karma`}
            color="primary"
            className="bg-blue-600 text-white font-bold"
            icon={<Star />}
          />
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-500 text-white"
          >
            + Follow
          </Button>
          <Button variant="outlined" className="text-blue-400 border-blue-400">
            Send Message
          </Button>
        </Box>

        <Box className="w-full mb-6">
          <Typography variant="h6" className="text-blue-400 font-semibold mb-3">
            My Core Skills
          </Typography>
          <Box className="flex flex-wrap gap-2">
            {alumniData.skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                className="bg-gray-700 text-white font-semibold"
              />
            ))}
          </Box>
        </Box>

        <Box className="w-full mb-6">
          <Typography variant="h6" className="text-blue-400 font-semibold mb-3">
            Professional Bio
          </Typography>
          <Typography variant="body2" className="text-gray-300">
            {alumniData.bio}
          </Typography>
        </Box>

        <Box className="w-full mb-6">
          <Typography variant="h6" className="text-blue-400 font-semibold mb-3">
            My Badges
          </Typography>
          <Grid container spacing={2}>
            {alumniData.badges.map((badge, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box className="flex flex-col items-center">
                  <Typography variant="h4" className="text-yellow-500">
                    {badge.icon}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-300 mt-1 text-center"
                  >
                    {badge.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="w-full mb-6">
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Box className="flex flex-col items-center">
                <Typography
                  variant="h6"
                  className="text-blue-400 font-semibold"
                >
                  {alumniData.followers}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Followers
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box className="flex flex-col items-center">
                <Typography
                  variant="h6"
                  className="text-blue-400 font-semibold"
                >
                  {alumniData.following}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Following
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default AlumniInfoPage;
