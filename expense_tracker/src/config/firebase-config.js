// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAldSIpEGFs2v3ipXtdEJhukRpNtsrTFaA",
  authDomain: "expense-tracker-9ed99.firebaseapp.com",
  projectId: "expense-tracker-9ed99",
  storageBucket: "expense-tracker-9ed99.appspot.com",
  messagingSenderId: "862641249965",
  appId: "1:862641249965:web:7fd2b4d718a99a798db024",
  measurementId: "G-JM14BG980X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);  