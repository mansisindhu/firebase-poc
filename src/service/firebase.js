import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import store from "../redux/store";
import { getUser } from "../redux/action";

// Firebase configuration (should be in .env)
const firebaseConfig = {
  apiKey: "AIzaSyAe5v6h2MssorsljBCPiZBD7-QLbEx41cQ",
  authDomain: "learn-firebase-7610f.firebaseapp.com",
  projectId: "learn-firebase-7610f",
  storageBucket: "learn-firebase-7610f.appspot.com",
  messagingSenderId: "509513614453",
  appId: "1:509513614453:web:7237c61b5f62e7430c643c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Google Auth Provider
const provider = new firebase.auth.GoogleAuthProvider();

export const signIn = async () => {
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    store.dispatch(
      getUser({
        displayName: result?.user?.displayName,
        email: result?.user?.email,
      })
    );
  } catch (error) {
    store.dispatch(getUser(null));
  }
};

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    store.dispatch(getUser(null));
  } catch (error) {
    store.dispatch(getUser(null));
  }
};
