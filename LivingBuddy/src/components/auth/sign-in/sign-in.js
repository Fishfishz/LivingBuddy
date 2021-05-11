import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Auth } from "index";
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
        history.push("/admin/dashboard");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setError("Error: " + errorMessage);
      });
  };

  return (
    <div id="outer-container">
      <div id="form-container">
        <h1
          style={{
            height: "65px",
            color: "rgba(0, 0, 0, 0.75)",
            "font-family": "Open Sans",
            "font-style": "normal",
            "font-weight": "bold",
            "font-size": "48px",
            "line-height": "40px",
            "text-align": "center",
          }}
        >
          Log in
        </h1>

        <form>
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
                "border-radius": "45px",
              }}
              onClick={(e) => {
                e.preventDefault();
                handleSignIn();
              }}
            >
              LOGIN
            </button>

            <Link to="/sign-up">
              <button className="btn btn-primary mr-2" style={{}}>
                Or sign up using UW email
              </button>
            </Link>

            <br />
            <Link to="/reset-password" style={{}}>
              Forgot password?
            </Link>
          </div>
        </form>

        <p>{error}</p>
      </div>

      <div id="right-rec-container">
        <h1
          style={{
            width: "392px",
            height: "130px",

            "font-family": "Open Sans",
            "font-style": "normal",
            "font-weight": "bold",
            "font-size": "48px",
            "line-height": "65px",
            display: "flex",
            "align-items": "center",
            "text-align": "center",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          Welcome back!
        </h1>
        <text
          style={{
            width: "370px",
            height: "273px",

            "font-family": "Open Sans",
            "font-style": "normal",
            "font-weight": "normal",
            "font-size": "18px",
            "line-height": "50px",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          • Exclusive for UW students
        </text>
      </div>
    </div>
  );
};

export default SignIn;
