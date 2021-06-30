import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";

// import { authActions } from "../../store/authSlice";

const useStyles = makeStyles({
  changePasswordFormContainer: {
    marginTop: "5rem",
  },
  changePasswordForm: {
    display: "flex",
    flexDirection: "column",
    minWidth: "15rem",
  },
  changePasswordBtnRoot: {
    background: "#1d6d86",
    color: "white",
    fontFamily: "Montserrat",
    marginTop: ".8rem",
    "&:hover": {
      background: "#1d6d86",
    },
  },
  newPasswordInputLabelRoot: {
    fontFamily: "Montserrat",
    whiteSpace: "nowrap",
    "&.Mui-focused": {
      color: "#1d6d86",
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
  inputRow: {
    marginBottom: "1rem",
  },
});

const ChangePasswordForm = () => {
  const classes = useStyles();

  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      console.log("RESPONSE:", res);
    });
  };
  return (
    <div className={classes.changePasswordFormContainer}>
      {/* ADD HIDE/SHOW PASSWORD FUNCTIONALITY LATER */}
      <form className={classes.changePasswordForm} onSubmit={handleSubmit}>
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
        >
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
