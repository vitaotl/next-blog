// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: "next-blog-victor.firebaseapp.com",
  projectId: "next-blog-victor",
  storageBucket: "next-blog-victor.appspot.com",
  messagingSenderId: "181366139427",
  appId: "1:181366139427:web:8fef7924c2a49d6e571f96",
  measurementId: "G-WZEFEYKPZE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);