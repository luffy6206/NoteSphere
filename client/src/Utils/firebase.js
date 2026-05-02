// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-937ed.firebaseapp.com",
  projectId: "authexamnotes-937ed",
  storageBucket: "authexamnotes-937ed.firebasestorage.app",
  messagingSenderId: "736923396610",
  appId: "1:736923396610:web:f004c50f86ace4abce951b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
