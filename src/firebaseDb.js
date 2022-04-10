import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyDTpWRjr4SB-JQdOCaAlWFMzDsU1gNySzE",
  authDomain: "collectathoners.firebaseapp.com",
  projectId: "collectathoners",
  storageBucket: "collectathoners.appspot.com",
  messagingSenderId: "57742609957",
  appId: "1:57742609957:web:5f2d916f3c99b50e0fb9cc"
};

const db = firebase.initializeApp(config);

export default db.firestore();
