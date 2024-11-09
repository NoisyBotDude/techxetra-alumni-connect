'user client'
import { Box, Typography, Chip, Grid } from "@mui/material";

const Skills = () => {
  const skills = [
    "User Interface Designing",
    "UX",
    "UI",
    "Adobe XD",
    "Mobile Apps",
    "User Research",
    "Wireframing",
    "Information Architecture",
  ];

  return (
    <Box className="flex flex-col items-start w-full max-w-md p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      {/* Title */}
      <Typography variant="h6" className="font-semibold text-white mb-2">
        Skills
      </Typography>

      {/* Skills Grid */}
      <Grid container spacing={1}>
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              label={skill}
              variant="outlined"
              sx={{
                color: "lightblue",
                borderColor: "lightblue",
                backgroundColor: "transparent",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
