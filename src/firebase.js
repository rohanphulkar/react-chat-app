import firebase from "firebase/app";
import "firebase/auth";
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyApOVJ0os0Hkl1InI-3pPvlLPYpJ1Yi4Zs",
    authDomain: "linkrr-34d66.firebaseapp.com",
    projectId: "linkrr-34d66",
    storageBucket: "linkrr-34d66.appspot.com",
    messagingSenderId: "247283855784",
    appId: "1:247283855784:web:253c94e5bcdd272d992d9d",
  })
  .auth();
