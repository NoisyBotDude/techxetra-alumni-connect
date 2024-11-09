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
    <div className="flex flex-col w-full px-4 py-4 bg-gray-800 text-white rounded-lg shadow-lg">
      {/* Title */}
      <Typography variant="h6" className="font-semibold text-white mb-4">
        Basic Information
      </Typography>

      {/* Information Grid */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body2" color="white">
            AGE
          </Typography>
          <Typography variant="body1" color="white">
            {userInfo.age}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="white">
            YEARS OF EXPERIENCE
          </Typography>
          <Typography variant="body1" color="white">
            {userInfo.experience}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="white">
            CTC
          </Typography>
          <Typography variant="body1" color="white">
            {userInfo.ctc}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="white">
            LOCATION
          </Typography>
          <Typography variant="body1" color="white">
            {userInfo.location}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="white">
            PHONE
          </Typography>
          <Typography variant="body1" color="white">
            {userInfo.phone}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="white">
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
    </div>
  );
};

export default BasicInformation;