// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIn5Y0IgwFdsLRTMiQETHPsqZ73F886o4",
  authDomain: "my-portfolio-fbca2.firebaseapp.com",
  projectId: "my-portfolio-fbca2",
  storageBucket: "my-portfolio-fbca2.appspot.com",
  messagingSenderId: "916875309476",
  appId: "1:916875309476:web:31e39311d9ec1f8ef0d131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;