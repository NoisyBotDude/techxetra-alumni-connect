"use client";

import React, { useState } from "react";
import SignUpSide from "../../components/SignUpSide";
import { UserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const { createUser, signInWithGoogle } = UserAuth();
  const [error, setError] = useState(null);

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

  const handleSignIn = async (data) => {
    setError(null);
    try {
      const userCredential = await createUser(data.email, data.password);
      if (userCredential) {
        const userAdded = await addUserToDB(userCredential.user);
        if (userAdded) {
          router.push("/add-info");
        }
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      setError("Failed to create an account. Please check your details and try again.");
    }
  };

  const handleGoogleSignUp = async () => {
    setError(null);
    try {
      const userCredential = await signInWithGoogle();
      if (userCredential) {
        const userAdded = await addUserToDB(userCredential.user);
        if (userAdded) {
          router.push("/add-info");
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
      <SignUpSide 
        handleSignIn={handleSignIn} 
        handleGoogleSignUp={handleGoogleSignUp} 
      />
    </>
  );
}