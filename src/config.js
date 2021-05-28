import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDbI410-hjrKjuduoavymTQpMZXF7jzpCI",
    authDomain: "loginauthshubu.firebaseapp.com",
    projectId: "loginauthshubu",
    storageBucket: "loginauthshubu.appspot.com",
    messagingSenderId: "782647092080",
    appId: "1:782647092080:web:1d2c787f37205ba31b65b5",
    measurementId: "G-M3P45SW09S"
});

export default firebaseConfig;