import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

export default function SignInCard() {
  return (
    <Card
      sx={{
        maxWidth: 350,
        margin: "auto",
        backgroundColor: "#1c1c1c",
        borderRadius: "10px",
        textAlign: "center",
        padding: 3,
        color: "#fff"
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src="\src\photo\siginin.png" // Replace with your actual image path
        alt="Sign In Illustration"
        sx={{
          width: "100%",
          height: "auto",
          marginBottom: 2
        }}
      />

      {/* Sign In Button */}
      <Button
        variant="contained"
        color="success"
        fullWidth
        sx={{
          fontWeight: "bold",
          fontSize: "1rem",
          padding: "10px 0"
        }}
      >
        Sign In
      </Button>
    </Card>
  );
}
