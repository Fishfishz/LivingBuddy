import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBdicI_-M0lIrJRNdczUdlhtrludFMa4IA",
    authDomain: "livingbuddy-75295.firebaseapp.com",
    projectId: "livingbuddy-75295",
    storageBucket: "livingbuddy-75295.appspot.com",
    messagingSenderId: "797012290700",
    appId: "1:797012290700:web:4612726f9f7f174b641fa9",
    measurementId: "G-R2GEVZMFDG"
};

// Use the config value from google firebase console here
firebase.initializeApp({
    apiKey: "AIzaSyBdicI_-M0lIrJRNdczUdlhtrludFMa4IA",
    authDomain: "livingbuddy-75295.firebaseapp.com",
    projectId: "livingbuddy-75295",
    storageBucket: "livingbuddy-75295.appspot.com",
    messagingSenderId: "797012290700",
    appId: "1:797012290700:web:4612726f9f7f174b641fa9",
    measurementId: "G-R2GEVZMFDG"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
