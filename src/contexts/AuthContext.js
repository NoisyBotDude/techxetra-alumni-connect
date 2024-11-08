"use client"

import React from "react";

import { useContext, createContext, useEffect, useState } from "react";
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithCustomToken,
  signInWithPopup,
  linkWithRedirect,
  sendEmailVerification,
  linkWithPopup,
  sendPasswordResetEmail,
  updatePassword,
  getAdditionalUserInfo,
  reauthenticateWithCredential,
  updateProfile,
  OAuthProvider
} from "firebase/auth";
import { auth } from "../lib/firebase-app";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const customTokenSignIn = (token) => {
    return signInWithCustomToken(auth, token);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signInWithMicrosoft = () => {
    const provider = new OAuthProvider('microsoft.com');
    return signInWithPopup(auth, provider);
  }

  const getAdditionalInfo = (user) => {
    return getAdditionalUserInfo(user);
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const linkAnotherAccount = () => {
    const provider = new GoogleAuthProvider();
    return linkWithPopup(user, provider);
  };

  const verifyEmail = (user) => {
    sendEmailVerification(user);
  };

  const updateUserPassword = (user, password) => {
    return updatePassword(user, password);
  }

  const updateUserInfo = (user, info) => {
    updateProfile(user, info);
  }

  const reauthenticateUser = (user, password) => {
    const credential = EmailAuthProvider.credential(user.email, password);
    return reauthenticateWithCredential(user, credential);
  }

  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <UserContext.Provider
      value={{
        user,
        createUser,
        loginUser,
        logoutUser,
        customTokenSignIn,
        signInWithGoogle,
        linkAnotherAccount,
        verifyEmail,
        resetPassword,
        updateUserPassword,
        getAdditionalInfo,
        reauthenticateUser,
        updateUserInfo,
        signInWithMicrosoft
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(UserContext);
};
