// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const statsRef = doc(db, "siteStats", "data");

// Function to initialize stats
export const initializeStats = async () => {
  const docSnap = await getDoc(statsRef);
  if (!docSnap.exists()) {
    await setDoc(statsRef, { visits: 0, likes: 0 });
  }
};

// Function to increment visits
export const incrementVisits = async () => {
  await updateDoc(statsRef, { visits: increment(1) });
};

// Function to increment likes
export const incrementLikes = async () => {
  await updateDoc(statsRef, { likes: increment(1) });
};

// Function to get stats
export const getStats = async () => {
  const docSnap = await getDoc(statsRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return { visits: 0, likes: 0 };
  }
};
