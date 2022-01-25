import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGmujMRUaQJOTY8hwy5WKYpnzV4towVKA",
  authDomain: "discord-clone-16558.firebaseapp.com",
  projectId: "discord-clone-16558",
  storageBucket: "discord-clone-16558.appspot.com",
  messagingSenderId: "987767806605",
  appId: "1:987767806605:web:7891c6f43ed7a21f75a0c4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;