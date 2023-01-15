import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe5v6h2MssorsljBCPiZBD7-QLbEx41cQ",
  authDomain: "learn-firebase-7610f.firebaseapp.com",
  projectId: "learn-firebase-7610f",
  storageBucket: "learn-firebase-7610f.appspot.com",
  messagingSenderId: "509513614453",
  appId: "1:509513614453:web:7237c61b5f62e7430c643c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signIn = () => signInWithPopup(auth, provider);

export const logOut = () => {
  auth.signOut();
};
