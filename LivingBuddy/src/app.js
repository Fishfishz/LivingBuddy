import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

import { Auth } from "./index";
import { useHistory } from "react-router-dom";
import SignUp from "./components/auth/sign-up/sign-up";
import SignIn from "./components/auth/sign-in/sign-in";

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
