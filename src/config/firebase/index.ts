import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBUqvEAkKno_3aANAHvFBIwRuTYOntM_G0',
  authDomain: 'playtomic-coding-exercise.firebaseapp.com',
  projectId: 'playtomic-coding-exercise',
  storageBucket: 'playtomic-coding-exercise.appspot.com',
  messagingSenderId: '1039381117268',
  appId: '1:1039381117268:web:a9ebb450fe0e80a32a30c1',
  measurementId: 'G-XEFFQ2PJTM'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  signInWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
  query,
  getDocs,
  collection,
  where,
  addDoc
};
