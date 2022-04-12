// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyD-ivtc8yZMiXOAkqLr3afotjJ2crX0ZTQ",
  authDomain: "ema-john-firebase-52575.firebaseapp.com",
  projectId: "ema-john-firebase-52575",
  storageBucket: "ema-john-firebase-52575.appspot.com",
  messagingSenderId: "221554177147",
  appId: "1:221554177147:web:d98b1789735bfed817dede",
  measurementId: "G-6Y03BCTR6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;