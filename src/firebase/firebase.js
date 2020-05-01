import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAOR1m5TJXXo6_g3JK_QTUKfa5dO_7u6h8",
  authDomain: "e-commerce-f578c.firebaseapp.com",
  databaseURL: "https://e-commerce-f578c.firebaseio.com",
  projectId: "e-commerce-f578c",
  storageBucket: "e-commerce-f578c.appspot.com",
  messagingSenderId: "187131380630",
  appId: "1:187131380630:web:026885124477427d6b53b7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
