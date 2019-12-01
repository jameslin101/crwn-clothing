import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCrMhXMvFUm48BqoMScV1FYhhJkh8AkNHk",
  authDomain: "crwb-db-2a5d8.firebaseapp.com",
  databaseURL: "https://crwb-db-2a5d8.firebaseio.com",
  projectId: "crwb-db-2a5d8",
  storageBucket: "crwb-db-2a5d8.appspot.com",
  messagingSenderId: "188885424740",
  appId: "1:188885424740:web:d21e72bb1fcc6733279d71"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

