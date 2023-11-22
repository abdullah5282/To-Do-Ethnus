// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCchGSXK6Rjms6X1nSgEweV6Zi5aKgNh_8",
  authDomain: "to-do-auth-846b0.firebaseapp.com",
  projectId: "to-do-auth-846b0",
  storageBucket: "to-do-auth-846b0.appspot.com",
  messagingSenderId: "348061259822",
  appId: "1:348061259822:web:58922028c048130385a7bf"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };


