import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD75Kn6rEA58lHfg6WyXCBb56uV09ixjWc",
  authDomain: "linkedin-clone-9d7a9.firebaseapp.com",
  projectId: "linkedin-clone-9d7a9",
  storageBucket: "linkedin-clone-9d7a9.appspot.com",
  messagingSenderId: "874002127213",
  appId: "1:874002127213:web:3a73c1650dbbef4fba2264"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };