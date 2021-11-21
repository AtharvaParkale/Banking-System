import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCdTUpK6qCeWg8_0R1vmswJ04iTuLkL_X4",
  authDomain: "banking-system-8eda5.firebaseapp.com",
  projectId: "banking-system-8eda5",
  storageBucket: "banking-system-8eda5.appspot.com",
  messagingSenderId: "574766180675",
  appId: "1:574766180675:web:6c2a2d99d6510a6833a7f6"
};

export const app=initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;