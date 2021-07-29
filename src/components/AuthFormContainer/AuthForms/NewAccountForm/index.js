import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import { API_KEY } from "../../../../utils/constants";
import useStyles from "./styles";

const NewAccountForm = ({ handleSubmit }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [passwordsDoMatch, setPasswordsDoMatch] = useState(true);

  const handleClickShowPassword = () => {
    setShowPassword((state) => !state);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((state) => !state);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPasswordValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

    if (passwordValue !== confirmPasswordValue) {
      setPasswordsDoMatch(false);
      return;
    } else {
      setPasswordsDoMatch(true);
    }

    handleSubmit(url, emailValue, passwordValue, confirmPasswordValue);
    setEmailValue("");
    setPasswordValue("");
    setConfirmPasswordValue("");
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
        <TextField
          type={showConfirmPassword ? "text" : "password"}
          InputProps={{
            classes: {
              underline: classes.bottomInputBorder,
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
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
          label="Confirm Password"
          onChange={handleConfirmPasswordChange}
          value={confirmPasswordValue}
          fullWidth
        />
        {!passwordsDoMatch && (
          <p style={{ color: "#ff4244", fontSize: ".85rem" }}>
            Passwords must match!
          </p>
        )}
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
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default NewAccountForm;
