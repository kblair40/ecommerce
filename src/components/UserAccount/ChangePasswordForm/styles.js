import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  changePasswordFormContainer: {
    height: "100%",
    width: "98%",
    fontFamily: "Montserrat",
    "& p": {
      color: "#ff4244",
      fontSize: ".8rem",
    },
  },
  // Actual HTML form element
  changePasswordForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "15rem",
  },
  formInputs: {
    display: "flex",
  },
  changePasswordBtnRoot: {
    background: "#1d6d86",
    color: "white",
    width: "12rem",
    minWidth: "12rem",
    fontFamily: "Montserrat",
    "&:hover": {
      background: "#1d6d86",
    },
  },
  newPasswordInputLabelRoot: {
    fontFamily: "Montserrat",
    fontSize: ".9rem",
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
    margin: "0 1rem 1rem 0",
  },
  responseModalContainer: {
    width: "50vw",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  responseModal: {
    height: "50%",
    width: "50%",
    minWidth: "18rem",
    minHeight: "12rem",
  },
  [theme.breakpoints.down("sm")]: {
    changePasswordFormContainer: {
      display: "flex",
      justifyContent: "center",
      "& p": {
        textAlign: "center",
      },
    },
    changePasswordForm: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    formInputs: {
      flexDirection: "column",
    },
    inputRow: {
      marginRight: "0",
    },
    changePasswordBtnRoot: {
      width: "50%",
    },
  },
  [theme.breakpoints.down("xs")]: {
    changePasswordFormContainer: {
      margin: "1rem 0 0 0",
    },
    responseModalContainer: {
      position: "absolute",
      bottom: "10rem",
    },
    changePasswordForm: {
      position: "relative",
    },
  },
}));

export default useStyles;
