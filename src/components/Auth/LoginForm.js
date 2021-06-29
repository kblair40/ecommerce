import React, { useRef } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  loginFormRow: {
    margin: "1rem 0 1.5rem 0",
  },
  loginInputLabelRoot: {
    fontFamily: "Montserrat",
    "&.Mui-focused": {
      color: "#1d6d86",
    },
  },
  submitBtnRoot: {
    background: "#1d6d86",
    color: "white",
    fontFamily: "Montserrat",
    "&:hover": {
      background: "#1d6d86",
    },
  },
  bottomInputBorder: {
    color: "#0c0c0d",
    "&:after": {
      borderColor: "#0c0c0d",
    },
    "&.Mui-focused": {
      borderColor: "#0c0c0d",
      "&:after": {
        borderColor: "#0c0c0d",
      },
    },
  },
}));

const LoginForm = ({ handleSubmit, isLoginMode }) => {
  const classes = useStyles();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  return (
    <div className={classes.formContentContainer}>
      <div className={classes.loginFormRow}>
        <TextField
          inputProps={{
            ref: emailInputRef,
          }}
          InputProps={{
            classes: {
              underline: classes.bottomInputBorder,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.loginInputLabelRoot,
            },
          }}
          id="standard-basic"
          label="Email"
          fullWidth
        />
      </div>
      <div className={classes.loginFormRow}>
        <TextField
          inputProps={{ ref: passwordInputRef }}
          InputProps={{
            classes: {
              underline: classes.bottomInputBorder,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.loginInputLabelRoot,
            },
          }}
          id="standard-basic"
          label="Password"
          fullWidth
        />
      </div>
      <div className={classes.loginFormRow}>
        <TextField
          inputProps={{ ref: confirmPasswordInputRef }}
          InputProps={{
            classes: {
              underline: classes.bottomInputBorder,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.loginInputLabelRoot,
            },
          }}
          id="standard-basic"
          label="Confirm Password"
          fullWidth
        />
      </div>
      <div className={classes.loginFormRow}>
        <Button
          variant="contained"
          classes={{ root: classes.submitBtnRoot }}
          type="submit"
          onClick={handleSubmit}
          fullWidth
          disableFocusRipple
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
