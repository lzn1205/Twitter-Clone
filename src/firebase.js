import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxcZ3jMrN2GoUGCKIssfxKeI9-xZTnau8",
  authDomain: "ln-twitter-clone.firebaseapp.com",
  databaseURL: "https://ln-twitter-clone.firebaseio.com",
  projectId: "ln-twitter-clone",
  storageBucket: "ln-twitter-clone.appspot.com",
  messagingSenderId: "1080422345701",
  appId: "1:1080422345701:web:f1bdef56b4c0339733dd0c",
  measurementId: "G-JT9BLXY9QV",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;
