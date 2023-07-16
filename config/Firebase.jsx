import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";


// const firebaseConfig = {
//   apiKey: "AIzaSyBOIVay3_mPI3e5qj6m7-o00b2BPBgIaQY",
//   authDomain: "hackverse-5ecdd.firebaseapp.com",
//   databaseURL: "https://hackverse-5ecdd-default-rtdb.firebaseio.com",
//   projectId: "hackverse-5ecdd",
//   storageBucket: "hackverse-5ecdd.appspot.com",
//   messagingSenderId: "316801498344",
//   appId: "1:316801498344:web:f70c7cb41d44f5bcf21d5d",
//   measurementId: "G-E8W4PT6DS5"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAb043n13F2p1La4F6vbwq3yflY1pCh1xE",
  authDomain: "rapid-respnse.firebaseapp.com",
  projectId: "rapid-respnse",
  storageBucket: "rapid-respnse.appspot.com",
  messagingSenderId: "933474583852",
  databaseURL:"https://rapid-respnse-default-rtdb.firebaseio.com",
  appId: "1:933474583852:web:910cd332ff10195570d889"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();
