// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEXhVeQXbXKvoJA1GwXGUy9-wHdYOFrp0",
  authDomain: "miniblog-ae11b.firebaseapp.com",
  projectId: "miniblog-ae11b",
  storageBucket: "miniblog-ae11b.firebasestorage.app",
  messagingSenderId: "652204133078",
  appId: "1:652204133078:web:3a0cbb66dc7e58040bd777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };