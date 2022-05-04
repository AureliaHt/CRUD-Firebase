import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const app = firebase.initializeApp({
  apiKey: REACT_APP_SECRET_API_KEY,
  authDomain: REACT_APP_SECRET_AUTH_DOMAIN,
  projectId: REACT_APP_SECRET_PROJECT_ID,
  storageBucket: REACT_APP_SECRET_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_SECRET_MESSAGING_SENDER_ID,
  appId: REACT_APP_SECRET_APP_ID
});

export const auth = app.auth();
export default app;