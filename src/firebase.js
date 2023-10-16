// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRvmNrG2ATVdNNnLl--z5bPrTTmm86aRk",
  authDomain: "realtor-clone-react-54f14.firebaseapp.com",
  projectId: "realtor-clone-react-54f14",
  storageBucket: "realtor-clone-react-54f14.appspot.com",
  messagingSenderId: "150207051692",
  appId: "1:150207051692:web:80cb49278279d78a4aec09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()