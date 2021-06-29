import React, { Fragment } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LockIcon from "@material-ui/icons/Lock";
import TextField from "@material-ui/core/TextField";
import FormContainer from "./FormContainer";

const useStyles = makeStyles((theme) => ({
  loginFormHeader: {
    color: "#0c0c0d",
  },
  loginFormRow: {
    margin: "1rem 0",
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  return (
    <FormContainer>
      <h1 className={classes.loginFormHeader}>Login</h1>
      <div className={classes.loginFormRow}>
        <TextField id="standard-basic" label="Email" />
      </div>
      <div className={classes.loginFormRow}>
        <TextField id="standard-basic" label="Password" />
      </div>
    </FormContainer>
  );
};

export default LoginForm;
