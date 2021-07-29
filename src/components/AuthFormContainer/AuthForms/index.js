import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import LoginForm from "./LoginForm";
import NewAccountForm from "./NewAccountForm";
import { authActions } from "../../../store/authSlice";
import useStyles from "./styles";

const AuthForms = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const dispatch = useDispatch();

  const toggleMode = () => {
    setIsLoginMode((state) => !state);
  };

  const handleSubmit = (url, email, password, confirmPassword = null) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        let displayName = email.split("@")[0];
        dispatch(
          authActions.login({
            token: data.idToken,
            displayName: displayName,
            expTime: expirationTime,
          })
        );
        // Send user back to home page after logging in.
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className={classes.authFormContainer}>
      <Card classes={{ root: classes.authFormContainerCardRoot }}>
        <h1 className={classes.loginFormHeader}>
          {isLoginMode ? "Login" : "Create Account"}
        </h1>
        <form onSubmit={handleSubmit}>
          {isLoginMode ? (
            <LoginForm handleSubmit={handleSubmit} isLoginMode={isLoginMode} />
          ) : (
            <NewAccountForm
              handleSubmit={handleSubmit}
              isLoginMode={isLoginMode}
            />
          )}
        </form>
        <Button
          onClick={toggleMode}
          variant="text"
          classes={{ root: classes.toggleModeBtnRoot }}
          disableRipple
        >
          {isLoginMode
            ? "No account? Create one!"
            : "Already have an account? Login"}
        </Button>
      </Card>
    </div>
  );
};

export default AuthForms;
