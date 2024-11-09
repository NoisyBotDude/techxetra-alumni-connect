"use client";

import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function SignInSide(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" className="h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-700">
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          className="hidden sm:block bg-cover bg-center"
          style={{
            backgroundImage: 'url("/static/images/templates/templates-images/sign-in-side-bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "left"
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            }}
            className="relative"
          >
            <Avatar className="bg-gradient-to-r from-purple-500 to-indigo-500">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" className="font-extrabold text-gray-800 mt-2">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }} component="form" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
                className="bg-white rounded-lg"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="bg-white rounded-lg"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                className="text-gray-700"
              />
              <Button
                type="submit"
                fullWidth
                onClick={() => props.handleSignIn({ email, password })}
                variant="contained"
                className="mt-4 mb-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg transition duration-300"
              >
                Sign In
              </Button>
              <Grid container justifyContent="center">
                <Button
                  variant="outlined"
                  onClick={props.handleGoogleSignUp}
                  startIcon={<GoogleIcon />}
                  className="w-full bg-white text-indigo-700 border border-indigo-500 hover:bg-indigo-50 transition duration-300 mt-2 rounded-lg"
                >
                  Continue with Google
                </Button>
              </Grid>
              <Grid container className="mt-4" justifyContent="space-between">
                <Grid item>
                  <Link href="#" variant="body2" className="text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" className="text-blue-600 hover:underline">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}