// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZV6bwA4cp9McUghYEv537oKeYFD1xEtE",
  authDomain: "contact-app-b3dd7.firebaseapp.com",
  projectId: "contact-app-b3dd7",
  storageBucket: "contact-app-b3dd7.appspot.com",
  messagingSenderId: "846262298940",
  appId: "1:846262298940:web:02ca3aedac544dbfc51639",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
