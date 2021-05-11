import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdicI_-M0lIrJRNdczUdlhtrludFMa4IA",
  authDomain: "livingbuddy-75295.firebaseapp.com",
  databaseURL: "https://livingbuddy-75295-default-rtdb.firebaseio.com",
  projectId: "livingbuddy-75295",
  storageBucket: "livingbuddy-75295.appspot.com",
  messagingSenderId: "797012290700",
  appId: "1:797012290700:web:4612726f9f7f174b641fa9",
  measurementId: "G-R2GEVZMFDG",
};

firebase.initializeApp(firebaseConfig);

export const Auth = firebase.auth();
export const fb = firebase;
export const db = firebase.firestore;
