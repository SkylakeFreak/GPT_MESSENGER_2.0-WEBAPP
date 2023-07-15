import {getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.OPENAI_API_KEY,
  authDomain: "chatgpt-messenger-yt-eea11.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-eea11",
  storageBucket: "chatgpt-messenger-yt-eea11.appspot.com",
  messagingSenderId: "618889700644",
  appId: "1:618889700644:web:7c42033d46a64fa8f97fb1"
};

// Initialize Firebase
const app=getApps().length ? getApp() : initializeApp(firebaseConfig);
const db=getFirestore(app);

export {db}
