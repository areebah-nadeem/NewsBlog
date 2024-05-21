
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG-8Zqw-7cU9eI_7sC4GlT_erPD-9CX70",
  authDomain: "newsletterblog-65d20.firebaseapp.com",
  projectId: "newsletterblog-65d20",
  storageBucket: "newsletterblog-65d20.appspot.com",
  messagingSenderId: "248420745088",
  appId: "1:248420745088:web:a2589b3c38f0c313610b65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);