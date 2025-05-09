import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { 
  getAuth, 
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

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
const db = getFirestore(app);

// Connect to emulators in development
if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, 'localhost', 8080);
}

// Authentication functions
const signUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

export { 
  auth, 
  signUpUser, 
  signInUser, 
  signOutUser 
};