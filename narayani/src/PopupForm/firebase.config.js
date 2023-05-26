// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlGeA5soUZNrDFiZPqV64DUtreU-P1ShQ",
  authDomain: "narayni-interiors.firebaseapp.com",
  projectId: "narayni-interiors",
  storageBucket: "narayni-interiors.appspot.com",
  messagingSenderId: "951505013565",
  appId: "1:951505013565:web:0ea2bfce2253d4d8d61354",
  measurementId: "G-XT9Z832C35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
