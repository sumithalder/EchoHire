import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAmKHYTHGnxbLXnsJqLvCiapeNC26yohZE",
  authDomain: "echohire-f1194.firebaseapp.com",
  projectId: "echohire-f1194",
  storageBucket: "echohire-f1194.firebasestorage.app",
  messagingSenderId: "671908153810",
  appId: "1:671908153810:web:8114db62b45d0afb20a00b",
  measurementId: "G-RR1M1RY32K"
};

const app =!getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);