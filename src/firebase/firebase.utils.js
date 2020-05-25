import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDdxhSoOstcNyL189nj_uDRU17xMeBrIPk",
    authDomain: "crown-db-9e65a.firebaseapp.com",
    databaseURL: "https://crown-db-9e65a.firebaseio.com",
    projectId: "crown-db-9e65a",
    storageBucket: "crown-db-9e65a.appspot.com",
    messagingSenderId: "309914558474",
    appId: "1:309914558474:web:a83ae8e4eb1e602cc17ff3",
    measurementId: "G-3EHEMBJDHG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;