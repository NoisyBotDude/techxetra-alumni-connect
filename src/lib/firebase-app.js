import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRKndPUu1J1g_RIBPdPiX5wjRF8tt_ou0",
  authDomain: "techxetra-alumni-connect.firebaseapp.com",
  projectId: "techxetra-alumni-connect",
  storageBucket: "techxetra-alumni-connect.firebasestorage.app",
  messagingSenderId: "913032497726",
  appId: "1:913032497726:web:ee9095a381dac7de3f9f6f",
  measurementId: "G-Q1GYKVE3BX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
