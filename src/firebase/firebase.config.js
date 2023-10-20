// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCElh8VrGtr4kfwmY5vHzMFg4cMgSDfeaE",
  authDomain: "brandshop-auth.firebaseapp.com",
  projectId: "brandshop-auth",
  storageBucket: "brandshop-auth.appspot.com",
  messagingSenderId: "573704759856",
  appId: "1:573704759856:web:799b836feee500534e5bf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;