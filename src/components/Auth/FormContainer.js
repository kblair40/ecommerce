import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import LoginForm from "./LoginForm";

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
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleMode = () => {
    setIsLoginMode((state) => !state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.authFormContainer}>
      <Card classes={{ root: classes.authFormContainerCardRoot }}>
        <h1 className={classes.loginFormHeader}>Login</h1>
        <form onSubmit={handleSubmit}>
          <LoginForm handleSubmit={handleSubmit} isLoginMode={isLoginMode} />
        </form>
        <Button
          onClick={toggleMode}
          variant="text"
          classes={{ root: classes.toggleModeBtnRoot }}
          disableRipple
        >
          No account? Create one!
        </Button>
        {isLoginMode && <div>LOGIN MODE!!</div>}
      </Card>
    </div>
  );
};

export default FormContainer;