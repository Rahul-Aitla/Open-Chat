import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCT_3NC3QB8Tq5uxWlJVNNfb2eyb4ip94M",
  authDomain: "chat-room-88c5a.firebaseapp.com",
  projectId: "chat-room-88c5a",
  storageBucket: "chat-room-88c5a.firebasestorage.app",
  messagingSenderId: "160600090541",
  appId: "1:160600090541:web:d98c8f639f462fb83fa324",
  measurementId: "G-VYMLB32M3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }

