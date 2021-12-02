import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAX2Yzv_jat2LYQ3oaGeLRaTHPW3M51Z9w",
  authDomain: "crwn-db-ee851.firebaseapp.com",
  projectId: "crwn-db-ee851",
  storageBucket: "crwn-db-ee851.appspot.com",
  messagingSenderId: "183558090793",
  appId: "1:183558090793:web:1b2c4ce96bd0f9bbfd2c38",
  measurementId: "G-X0EGZKCGJ0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
