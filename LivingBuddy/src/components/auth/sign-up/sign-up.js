import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Auth } from "index";
import "./sign-up.css";
import "../auth.css";

const SignUp = ({ setSignedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  useEffect(() => {
    Auth.onAuthStateChanged((user) => {
      if (user) history.push("/admin/dashboard");
    });
  });

  const handleSignUp = () => {
    setError("");
    if (checkSignUpInfo()) {
      Auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
          setSignedIn(true);
          sessionStorage.setItem("signedIn", true);
        })
        .catch((error) => {
          var errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };

  const checkSignUpInfo = () => {
    let uwEmailRegex = /uw.edu/;
    if (!uwEmailRegex.test(email)) {
      setError(
        "Please try again with your UW email. Our platform is here for UW students only."
      );
      return false;
    }

    if (password !== passwordConfirm) {
      setError("Error: Passwords need to match");
      return false;
    }
    return true;
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
          Sign up
        </h1>
        <h1
          style={{
            height: "65px",
            color: "rgba(0, 0, 0, 0.75)",
            "font-family": "Open Sans",
            "font-style": "italic",
            "font-weight": "bold",
            "font-size": "24px",
            "line-height": "40px",
            "text-align": "center",
          }}
        >
          with your UW email
        </h1>

        <form id="sign-up">
          {/* email */}
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
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
              placeholder="6+ characters"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          {/* confirm password */}
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              className="form-control"
              id="password"
              type="password"
              name="password"
              placeholder="Type again"
              onChange={(event) => {
                setPasswordConfirm(event.target.value);
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
                console.log("signing up...");
                handleSignUp();
              }}
            >
              I'm in!
            </button>

            <Link to="/sign-in">
              <button className="btn btn-primary mr-2" style={{}}>
                Already have an account? Log in.
              </button>
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
          Connect to your living buddies today!
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
            "margin-top": "20px",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          • Exclusive for UW students
        </text>
      </div>
    </div>
  );
};

export default SignUp;
