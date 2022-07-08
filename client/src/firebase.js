import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
//import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYCdlEjx7UFudqlyHU011E02AvIguaThw",
    authDomain: "shop-6df5f.firebaseapp.com",
    projectId: "shop-6df5f",
    storageBucket: "shop-6df5f.appspot.com",
    messagingSenderId: "756094449809",
    appId: "1:756094449809:web:90dd7b4094ee09eea86730"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  //const firebaseApp = initializeApp(firebaseConfig)
  // export
  export const auth = firebase.auth();
  //export const auth = getAuth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 