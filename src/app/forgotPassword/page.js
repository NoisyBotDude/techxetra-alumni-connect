// pages/forgot-password.js
"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async () => {
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess("A password reset link has been sent to your email.");
      } else {
        const data = await response.json();
        setError(data.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          padding: 4,
          backgroundColor: "#1E1E1E",
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2} color="white">
          Forgot Password
        </Typography>
        <Typography variant="body2" color="gray" mb={3}>
          Enter your email to receive a password reset link.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ marginBottom: 2 }}>
            {success}
          </Alert>
        )}

        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          sx={{
            backgroundColor: "#333",
            input: { color: "white" },
            label: { color: "gray" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#3B82F6" },
              "&:hover fieldset": { borderColor: "#3B82F6" },
              "&.Mui-focused fieldset": { borderColor: "#3B82F6" },
            },
            mb: 3,
          }}
          InputLabelProps={{ style: { color: "gray" } }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleResetPassword}
          sx={{ backgroundColor: "#4F86F7", color: "white", fontWeight: "bold" }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </Button>
      </Box>
    </Box>
  );
};

export default ForgotPassword;