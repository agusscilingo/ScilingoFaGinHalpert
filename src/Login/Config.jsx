// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7NJvsGpf1eEZMeawb8I8dGd4Q1uHqZUE",
  authDomain: "ecommerce-e18f3.firebaseapp.com",
  projectId: "ecommerce-e18f3",
  storageBucket: "ecommerce-e18f3.appspot.com",
  messagingSenderId: "25940061377",
  appId: "1:25940061377:web:c79fc506c8b476b8713840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);
const provider = new GoogleAuthProvider();
export {auth, provider};