"use client"

import React from "react";
import SignUpSide from "../../components/SignUpSide";
import { UserAuth } from "../../contexts/AuthContext";

export default function SignUp() {
  const { createUser, user, signInWithGoogle, verifyEmail, getAdditionalInfo } =
    UserAuth();

  const handleSignIn = async (data) => {
    try {
      const response = await createUser(data.email, data.password);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return <SignUpSide handleSignIn={handleSignIn} />;
}
