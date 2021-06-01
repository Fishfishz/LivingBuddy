import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Auth } from "app";
import "./sign-in.css";
import "../auth.css";

const SignIn = ({ setSignedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSignIn = () => {
    setError("");
    Auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        setSignedIn(true);
        sessionStorage.setItem("signedIn", true);
        sessionStorage.setItem("email", email);
        history.push("/admin/dashboard");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setError("Error: " + errorMessage);
      });
  };

  const handleRedirect = () => {
    history.push("/sign-up");
  };

  return (
    <div id="outer-container">
      <div id="form-container">
        <h1
          style={{
            height: "65px",
            color: "rgba(0, 0, 0, 0.75)",
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "48px",
            lineHeight: "40px",
            textAlign: "center",
          }}
        >
          Log in
        </h1>

        <form data-testid="t1">
          {/* email */}
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
              style={{
                width: "449px",
              }}
              placeholder="......@uw.edu"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          {/* password */}
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              className="form-control"
              id="password"
              type="password"
              name="password"
              style={{
                width: "449px",
              }}
              placeholder="Type your password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          {/* buttons */}
          <div id="button-container">
            <button
              className="btn btn-primary mr-2"
              style={{
                width: "352px",
                height: "44.25px",
                background:
                  "linear-gradient(92.83deg, #EFCAC6 0%, rgba(255, 255, 255, 0) 100%), #7370BB",
                borderRadius: "45px",
              }}
              onClick={(e) => {
                e.preventDefault();
                handleSignIn();
              }}
            >
              LOGIN
            </button>

            <button
              className="btn btn-primary mr-2"
              style={{}}
              onClick={handleRedirect}
            >
              Or sign up using UW email
            </button>

            <br />
          </div>
        </form>

        <p>{error}</p>
      </div>

      <div id="right-rec-container">
        <h1
          style={{
            width: "392px",
            height: "130px",

            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "48px",
            lineHeight: "65px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          Welcome back!
        </h1>
        <p
          style={{
            width: "370px",
            height: "273px",

            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
            lineHeight: "50px",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          • Exclusive for UW students
        </p>
      </div>
    </div>
  );
};

export default SignIn;
