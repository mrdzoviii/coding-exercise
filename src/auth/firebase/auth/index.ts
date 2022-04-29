import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut
} from 'firebase/auth';

import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBUqvEAkKno_3aANAHvFBIwRuTYOntM_G0',
  authDomain: 'playtomic-coding-exercise.firebaseapp.com',
  projectId: 'playtomic-coding-exercise',
  storageBucket: 'playtomic-coding-exercise.appspot.com',
  messagingSenderId: '1039381117268',
  appId: '1:1039381117268:web:a9ebb450fe0e80a32a30c1',
  measurementId: 'G-XEFFQ2PJTM'
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

export const auth = getAuth(app);
export const db = getFirestore(app);
export {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  googleProvider,
  addDoc,
  collection,
  signOut
};
