// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
import {getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXZcZC6VNJLYFJ4uwzUlehUnJmk4r2sUk",
  authDomain: "my-articles-aa52c.firebaseapp.com",
  projectId: "my-articles-aa52c",
  storageBucket: "my-articles-aa52c.appspot.com",
  messagingSenderId: "28367819155",
  appId: "1:28367819155:web:9b604b3b685e09f4fb9866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)