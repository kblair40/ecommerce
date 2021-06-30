import React, { useRef } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../../store/authSlice";
import { API_KEY } from "../../constants";

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
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const token = useSelector((state) => state.auth.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordValue = passwordInputRef.current.value;
    const confirmPasswordValue = confirmPasswordInputRef.current.value;
    console.log("PASSWORD:", passwordValue, "\nCONFIRM:", confirmPasswordValue);
    passwordInputRef.current.value = "";
    confirmPasswordInputRef.current.value = "";
    console.log("TOKEN:", token);
    console.log("API_KEY:", API_KEY);
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
            inputProps={{
              ref: passwordInputRef,
            }}
            InputProps={{
              classes: {
                underline: classes.bottomInputBorder,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.newPasswordInputLabelRoot,
              },
            }}
            label="New Password"
            fullWidth
          />
        </div>
        <div className={classes.inputRow}>
          <TextField
            inputProps={{
              ref: confirmPasswordInputRef,
            }}
            InputProps={{
              classes: {
                underline: classes.bottomInputBorder,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.newPasswordInputLabelRoot,
              },
            }}
            label="Confirm New Password"
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
