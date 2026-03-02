// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0ssLoRCXvDaITKCziZEOdfimuT6QWrSo",
  authDomain: "singly-register.firebaseapp.com",
  projectId: "singly-register",
  storageBucket: "singly-register.firebasestorage.app",
  messagingSenderId: "537419116436",
  appId: "1:537419116436:web:7ba53c86dbb30f0dda2981",
  measurementId: "G-HCZNSRJHW3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);