import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBfTqRC_bUI4hZwBnXN6fPlJKiOsv_fvfI",
  authDomain: "crud-firebase-5c80e.firebaseapp.com",
  projectId: "crud-firebase-5c80e",
  storageBucket: "crud-firebase-5c80e.appspot.com",
  messagingSenderId: "513800770384",
  appId: "1:513800770384:web:76349a53edd056339f1255"
});

export const auth = app.auth();
export default app;