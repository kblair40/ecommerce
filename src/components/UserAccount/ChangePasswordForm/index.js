import React, { useState } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";

import SuccessModal from "../../../misc/SuccessModal";
import useStyles from "./styles";

const ChangePasswordForm = () => {
  const classes = useStyles();

  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formHasLengthError, setFormHasLengthError] = useState(false);
  const [formHasPwdError, setFormHasPwdError] = useState(false);
  const [passwordChangeSuccessful, setPasswordChangeSuccessful] =
    useState(false);
  const [passwordChangeAttempted, setPasswordChangeAttempted] = useState(false);

  const token = useSelector((state) => state.auth.token);

  const handleClickShowPassword = () => {
    setShowPassword((state) => !state);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((state) => !state);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPasswordInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordValue = passwordInput;
    const confirmPasswordValue = confirmPasswordInput;

    if (passwordValue.length < 6) {
      setFormHasLengthError(true);
      return;
    } else if (passwordValue !== confirmPasswordValue) {
      setFormHasLengthError(false);
      setFormHasPwdError(true);
      return;
    } else {
      setFormHasLengthError(false);
      setFormHasPwdError(false);
    }

    setPasswordInput("");
    setConfirmPasswordInput("");

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDyaOMH6tT8rP3-edQtQi-dSoYICqmDaa0",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: passwordValue,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      // assuming this ALWAYS succeeds
      // console.log("RESPONSE:", res);
      if (res.ok) {
        setPasswordChangeAttempted(true);
        setPasswordChangeSuccessful(true);
      }
    });
  };
  return (
    <div className={classes.changePasswordFormContainer}>
      <form onSubmit={handleSubmit} className={classes.changePasswordForm}>
        <div className={classes.inputRow}>
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
                root: classes.newPasswordInputLabelRoot,
              },
            }}
            label="New Password"
            onChange={handlePasswordChange}
            value={passwordInput}
            fullWidth
          />
        </div>
        <div className={classes.inputRow}>
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
                root: classes.newPasswordInputLabelRoot,
              },
            }}
            label="Confirm New Password"
            onChange={handleConfirmPasswordChange}
            value={confirmPasswordInput}
            fullWidth
          />
        </div>
        <Button
          classes={{ root: classes.changePasswordBtnRoot }}
          variant="contained"
          type="submit"
          fullWidth
          disableFocusRipple
        >
          Change Password
        </Button>
      </form>
      {formHasPwdError && <p>Passwords do not match!</p>}
      {formHasLengthError && <p>Password must be a minimum of 6 characters!</p>}

      {passwordChangeAttempted && passwordChangeSuccessful && (
        <div className={classes.responseModalContainer}>
          <div className={classes.responseModal}>
            <SuccessModal
              mainText="Success!"
              subText="Please return to login"
              buttonText="Return to Login"
              redirectTo="/auth"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePasswordForm;
