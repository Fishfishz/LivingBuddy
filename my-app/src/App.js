import logo from './logo.svg';
import './App.css';
import React from "react";
import firebase from "firebase";

function App() {
  const firebaseApp = firebase.apps[0];
  return (
      <div>
        <h1 data-testid='t1'>React & Firebase</h1>
        <h2>By @LivingBuddy Team @UWCSE</h2>
      </div>
  );
}

export default App;
