// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb1QRD6wG42iYU7T2nDcjwl5FefQ4jTyQ",
  authDomain: "travel-guru-react-fireba-fdf0a.firebaseapp.com",
  projectId: "travel-guru-react-fireba-fdf0a",
  storageBucket: "travel-guru-react-fireba-fdf0a.appspot.com",
  messagingSenderId: "805999479724",
  appId: "1:805999479724:web:275098fb33286cdf81c809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;