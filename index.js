// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import {getFirestore, connectFirestoreEmulator} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiHk0lGtKEJXVkn4Qk5wVqsezgBr11VLs",
  authDomain: "info340draft2.firebaseapp.com",
  projectId: "info340draft2",
  storageBucket: "info340draft2.firebasestorage.app",
  messagingSenderId: "840655807049",
  appId: "1:840655807049:web:ef0c2cbef76252e8fd1598",
  measurementId: "G-SKYK2MX0JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const musicData = getFirestore(app)

// if (window.location.hostname === "localhost") {
//   connectAuthEmulator(auth, "http://localhost:9099")
//   connectFirestoreEmulator(musicData, "localhost", 8080)
// }