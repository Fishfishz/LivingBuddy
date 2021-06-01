import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import { useHistory } from "react-router-dom";
import SignUp from "./components/auth/sign-up/sign-up";
import SignIn from "./components/auth/sign-in/sign-in";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdicI_-M0lIrJRNdczUdlhtrludFMa4IA",
  authDomain: "livingbuddy-75295.firebaseapp.com",
  projectId: "livingbuddy-75295",
  storageBucket: "livingbuddy-75295.appspot.com",
  messagingSenderId: "797012290700",
  appId: "1:797012290700:web:4612726f9f7f174b641fa9",
  measurementId: "G-R2GEVZMFDG",
};

// Use the config value from google firebase console here
firebase.initializeApp(firebaseConfig);
export const fb = firebase;
export const Auth = firebase.auth();
export const db = firebase.firestore();

const App = () => {
  const [signedIn, setSignedIn] = React.useState(
    sessionStorage.getItem("signedIn")
  );
  const history = useHistory();

  const handleLogOut = () => {
    Auth.signOut();
    setSignedIn(false);
    sessionStorage.removeItem("signedIn");
    history.push("/home");
  };

  return (
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Route
        path="/sign-up"
        render={() => <SignUp setSignedIn={setSignedIn} />}
      />
      <Route
        path="/sign-in"
        render={() => <SignIn setSignedIn={setSignedIn} />}
      />
      <Redirect from="/" to="/sign-in" />
    </Switch>
  );
};

export default App;
