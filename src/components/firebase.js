import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDOBy7vTf8Cbgjt0x5Totkg6rfeTsYSh9c",
  authDomain: "facebook-clone-1a216.firebaseapp.com",
  databaseURL: "https://facebook-clone-1a216.firebaseio.com",
  projectId: "facebook-clone-1a216",
  storageBucket: "facebook-clone-1a216.appspot.com",
  messagingSenderId: "175467485703",
  appId: "1:175467485703:web:543459912648c03caa68a2",
  measurementId: "G-J3E8JR10JH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
