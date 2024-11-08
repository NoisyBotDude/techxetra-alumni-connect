"use client";

import React from "react";
import SignInSide from "../../components/SignInSide";
import { UserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function SignIn() {

  const router = useRouter();

  const { loginUser, signInWithGoogle } =
    UserAuth();

  const handleSignIn = async (data) => {
    try {
      const response = await loginUser(data.email, data.password);
      if (response) {
        router.push("/");
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
    
  return <SignInSide 
            handleSignIn={handleSignIn} 
            handleGoogleSignUp={handleGoogleSignUp}
          />;
}
