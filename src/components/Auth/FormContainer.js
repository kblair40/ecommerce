import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import LoginForm from "./LoginForm";
import NewAccountForm from "./NewAccountForm";
import { authActions } from "../../store/authSlice";

const useStyles = makeStyles((theme) => ({
  authFormContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "4rem 0",
  },
  authFormContainerCardRoot: {
    fontFamily: "Montserrat",
    padding: "1rem",
    minWidth: "15rem",
    width: "100%",
    maxWidth: "25rem",
    margin: "1rem",
  },
  loginFormHeader: {
    color: "#0c0c0d",
  },
  toggleModeBtnRoot: {
    fontFamily: "Montserrat",
    color: "#a0a1a1",
    transition: "color .3s",
    margin: 0,
    padding: ".5rem 0",
    "&:hover": {
      color: "#0c0c0d",
      background: "transparent",
    },
  },
}));

const FormContainer = ({ children }) => {
  const classes = useStyles();

  const history = useHistory();

  const [isLoginMode, setIsLoginMode] = useState(true);

  const dispatch = useDispatch();

  const toggleMode = () => {
    setIsLoginMode((state) => !state);
  };

  const handleSubmit = (url, email, password, confirmPassword = null) => {
    console.log(
      "URL:",
      url,
      "\nEMAIL:",
      email,
      "\nPASSWORD:",
      password,
      "\nCONFIRM PASSWORD:",
      confirmPassword
    );

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
            // MIGHT WANT TO STORE ERROR MODAL HERE INSTEAD OF THE BELOW
            console.log("ERROR:", data);
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            // alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log("SUCCESS:", data);
        dispatch(authActions.login(data.idToken));
        // Maybe make the '/' below be '/login' if user just created new account
        // history.replace("/");
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

export default FormContainer;
