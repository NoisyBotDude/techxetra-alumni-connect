"use client"

import React from "react";
import SignUpSide from "../../components/SignUpSide";
import { UserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function SignUp() {

  const router = useRouter();

  const { createUser, signInWithGoogle } =
    UserAuth();

  const handleSignIn = async (data) => {
    try {
      const response = await createUser(data.email, data.password);
      if (response) {
        router.push("/add-info");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleGoogleSignUp = async () => {
    try {
      const response = await signInWithGoogle();
      if (response) {
        router.push("/add-info");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return <SignUpSide 
            handleSignIn={handleSignIn} 
            handleGoogleSignUp={handleGoogleSignUp}
          />;
}
