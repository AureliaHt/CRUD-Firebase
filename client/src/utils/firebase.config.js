import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_SECRET_API_KEY,
  authDomain: process.env.REACT_APP_SECRET_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_SECRET_PROJECT_ID,
  storageBucket: process.env.REACT_APP_SECRET_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SECRET_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_SECRET_APP_ID
});

export const auth = app.auth();
export default app;