import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDikzB_DbsGuXD4Fw6JnWqIFb4I0ANkv8o",
  authDomain: "to-do-app-59845.firebaseapp.com",
  projectId: "to-do-app-59845",
  storageBucket: "to-do-app-59845.appspot.com",
  messagingSenderId: "1086549193211",
  appId: "1:1086549193211:web:72dc4b1d54c165a1eb9b5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);

