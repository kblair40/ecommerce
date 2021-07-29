import makeStyles from "@material-ui/core/styles/makeStyles";

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

export default useStyles;
