import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5jLZ0W1pZjPwoETuSOKZ9qcclJvaUFMk",
  authDomain: "fashion-bd1e9.firebaseapp.com",
  databaseURL: "https://fashion-bd1e9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fashion-bd1e9",
  storageBucket: "fashion-bd1e9.appspot.com",
  messagingSenderId: "878600454352",
  appId: "1:878600454352:web:40b9587def977657741ed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default firebase;
