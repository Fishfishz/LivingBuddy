/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import "assets/css/material-dashboard-react.css?v=1.9.0";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import firebase from "firebase";

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
firebase.initializeApp(firebaseConfig);
export const fb = firebase;
export const Auth = firebase.auth();
export const db = firebase.firestore;


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
