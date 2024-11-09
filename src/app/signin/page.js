"use client";

import React, { useState, useEffect } from "react";
import SignInSide from "../../components/SignInSide";
import { UserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const { loginUser, signInWithGoogle } = UserAuth();
  const [error, setError] = useState(null);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    if (user_id) {
      router.push("/");
    }
  }, [])

  const addUserToDB = async (user) => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.uid,
          email: user.email,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save user to the database");
      }
      return await response.json();
    } catch (error) {
      console.error("Database error:", error);
      setError("There was an issue saving your data. Please try again.");
      return null;
    }
  };

  const checkUserExists = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      if (response.ok) {
        return await response.json();
      }
      if (response.status === 404) {
        return null; // User does not exist
      }
      throw new Error("Error checking user existence");
    } catch (error) {
      console.error("User check error:", error);
      setError("An error occurred while checking user existence. Please try again.");
      return null;
    }
  };

  const handleSignIn = async (data) => {
    setError(null);
    try {
      const response = await loginUser(data.email, data.password);
      if (response) {
        localStorage.setItem("user_id", userCredential.user.uid);
        router.push("/");
      } else {
        setError("No account found with this email. Please sign up.");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      setError("Failed to sign in. Please check your details and try again.");
    }
  };

  const handleGoogleSignUp = async () => {
    setError(null);
    try {
      const userCredential = await signInWithGoogle();
      if (userCredential) {
        const user = userCredential.user;
        const userExists = await checkUserExists(user.uid);
        localStorage.setItem("user_id", userCredential.user.uid);
        if (userExists) {
          router.push("/");
        } else {
          const userAdded = await addUserToDB(user);
          if (userAdded) {
            router.push("/add-info");
          }
        }
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <>
      {error && <p className="error-message">{error}</p>}
      <SignInSide 
        handleSignIn={handleSignIn} 
        handleGoogleSignUp={handleGoogleSignUp} 
      />
    </>
  );
}