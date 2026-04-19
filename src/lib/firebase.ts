import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhgfvxGHxUJDOcijzZ2f9h1MFb8IBeVO4",
  authDomain: "pioneera-2.firebaseapp.com",
  projectId: "pioneera-2",
  storageBucket: "pioneera-2.firebasestorage.app",
  messagingSenderId: "371515550329",
  appId: "1:371515550329:web:b22f3b2f46311a95fe82a8",
  measurementId: "G-JHRE4VD0LY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (Database)
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
