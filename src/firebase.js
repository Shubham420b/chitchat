import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBazSZbV3h1McqPz6vaOPw91GaVOenOqD4",
  authDomain: "chitchat-58f07.firebaseapp.com",
  projectId: "chitchat-58f07",
  storageBucket: "chitchat-58f07.appspot.com",
  messagingSenderId: "18061054146",
  appId: "1:18061054146:web:9ae948dd5c0e34a226eb5b"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
