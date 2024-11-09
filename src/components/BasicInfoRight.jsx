'user client'
import { Box, Typography, Grid, Button } from "@mui/material";
import { Download, Email } from "@mui/icons-material";

const BasicInformation = () => {
  const userInfo = {
    age: "28 years",
    experience: "6 years",
    ctc: "12.5 Lac",
    location: "Ahmedabad, Gujarat",
    phone: "+91 98123 55679",
    email: "ananyasharma@gmail.com",
  };

  return (
    <Box className="flex flex-col w-full max-w-lg p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      {/* Title */}
      <Typography variant="h6" className="font-semibold text-white mb-4">
        Basic Information
      </Typography>

      {/* Information Grid */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">
            AGE
          </Typography>
          <Typography variant="body1" color="white">
            {userInfo.age}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">
            YEARS OF EXPERIENCE
          </Typography>
          <Typography variant="body1" color="white">
            {userInfo.experience}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">
            CTC
          </Typography>
          <Typography variant="body1" color="white">
            {userInfo.ctc}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">
            LOCATION
          </Typography>
          <Typography variant="body1" color="white">
            {userInfo.location}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">
            PHONE
          </Typography>
          <Typography variant="body1" color="white">
            {userInfo.phone}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">
            EMAIL
          </Typography>
          <Typography variant="body1" color="white">
            {userInfo.email}
          </Typography>
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Box mt={4} display="flex" gap={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Download />}
          className="bg-blue-500 text-white"
        >
          Download Resume
        </Button>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<Email />}
          className="text-white border-blue-500"
        >
          Send Email
        </Button>
      </Box>
    </Box>
  );
};

export default BasicInformation;
