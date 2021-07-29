import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  changePasswordFormContainer: {
    margin: "5rem 0 0 2rem",
    fontFamily: "Montserrat",
    "& p": {
      color: "#ff4244",
      maxWidth: "14rem",
      fontSize: ".8rem",
    },
  },
  changePasswordForm: {
    display: "flex",
    alignItems: "center",
    minWidth: "15rem",
  },
  changePasswordBtnRoot: {
    background: "#1d6d86",
    color: "white",
    width: "50%",
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
    marginRight: "1rem",
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
    changePasswordForm: {
      flexDirection: "column",
    },
    inputRow: {
      marginRight: "0",
    },
    changePasswordBtnRoot: {
      width: "100%",
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
  },
}));

export default useStyles;
