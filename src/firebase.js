import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    // Masukkan konfigurasi Firebase Anda di sini
    apiKey: "AIzaSyC72Vzo8eRjmSRNPWqfXwgAuK7sset4ha0",
    authDomain: "myipondv2.firebaseapp.com",
    databaseURL: "https://myipondv2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myipondv2",
    storageBucket: "myipondv2.appspot.com",
    messagingSenderId: "1072085564345",
    appId: "1:1072085564345:web:c927c22e532a3b145f1468"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the Firebase database
export const db = getDatabase(app);