// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-24025.firebaseapp.com",
  projectId: "mern-estate-24025",
  storageBucket: "mern-estate-24025.appspot.com",
  messagingSenderId: "537938334264",
  appId: "1:537938334264:web:4a3769f8ad6dc0607a4ccd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
