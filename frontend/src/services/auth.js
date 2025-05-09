import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 🔥 Add this

const firebaseConfig = {
  apiKey: "AIzaSyClMgxltRfjU_hvT9C1H3Reaqf2TQRwT88",
  authDomain: "influencer-platform-60b03.firebaseapp.com",
  projectId: "influencer-platform-60b03",
  storageBucket: "influencer-platform-60b03.firebasestorage.app",
  messagingSenderId: "399710344337",
  appId: "1:399710344337:web:ba44619cd2a4a1e8ed5b30",
  measurementId: "G-94GNEV7RPN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // 🔥 Add this

export { 
  auth, 
  db, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
};
