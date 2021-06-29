import React, { useRef } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
  return (
    <div className={classes.changePasswordFormContainer}>
      {/* ADD HIDE/SHOW PASSWORD FUNCTIONALITY LATER */}
      <form className={classes.changePasswordForm}>
        <div className={classes.inputRow}>
          <TextField
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
            // onChange={handleNewPasswordChange}
            // value={newPasswordValue}
            fullWidth
          />
        </div>
        <div className={classes.inputRow}>
          <TextField
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
            // onChange={handleNewPasswordChange}
            // value={newPasswordValue}
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
