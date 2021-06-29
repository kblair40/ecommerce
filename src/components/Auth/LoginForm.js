import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import { API_KEY } from "../../constants";

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
    fontFamily: "Montserrat",
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
  const [showPassword, setShowPassword] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword((state) => !state);
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

    handleSubmit(url, emailValue, passwordValue);
    setEmailValue("");
    setPasswordValue("");
  };

  return (
    <div className={classes.formContentContainer}>
      <div className={classes.loginFormRow}>
        <TextField
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
          onChange={handleEmailChange}
          value={emailValue}
          fullWidth
        />
      </div>
      <div className={classes.loginFormRow}>
        <TextField
          type={showPassword ? "text" : "password"}
          InputProps={{
            classes: {
              underline: classes.bottomInputBorder,
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            classes: {
              root: classes.loginInputLabelRoot,
            },
          }}
          id="standard-basic"
          label="Password"
          onChange={handlePasswordChange}
          value={passwordValue}
          fullWidth
        />
      </div>

      <div className={classes.loginFormRow}>
        <Button
          variant="contained"
          classes={{ root: classes.submitBtnRoot }}
          type="submit"
          onClick={handleClickSubmit}
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
