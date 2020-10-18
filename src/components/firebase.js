import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1s4q3MtuYvqDnd3M1Gw49Ru-922OR94A",
    authDomain: "clone-5b9a6.firebaseapp.com",
    databaseURL: "https://clone-5b9a6.firebaseio.com",
    projectId: "clone-5b9a6",
    storageBucket: "clone-5b9a6.appspot.com",
    messagingSenderId: "883256971448",
    appId: "1:883256971448:web:e1ae03447cc7d3b6ce644d",
    measurementId: "G-7FRDSCGHPY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
    db,
    auth
};