import firebase from "firebase";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "API_KEY",
  projectId: "API_KEY",
  storageBucket: "API_KEY",
  messagingSenderId: "API_KEY",
  appId: "API_KEY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
