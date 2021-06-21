import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  checkoutFormContainer: {
    color: "#0c0c0d",
    "& input": {
      color: "#0c0c0d",
    },
    "& label": {
      color: "#909191",
    },
    fontFamily: "Oswald",
    fontWeight: 800,
    padding: "1rem",
  },
  inputRoot: {
    fontFamily: "Montserrat",
    "&:after": {
      borderColor: "#a0a1a1",
    },
    "&.Mui-error:after": {
      borderColor: "#ff4244",
    },
  },
  inputRow: {
    marginBottom: "1rem",
    width: "100%",
    maxWidth: "30rem",
  },
  multipleInputRow: {
    width: "100%",
    maxWidth: "30rem",
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "1rem",
  },
  inputCol: {
    width: "32%",
    margin: "0 .5% 1rem .5%",
    minWidth: "5rem",
  },
  selectRoot: {
    fontFamily: "Montserrat",
    color: "#0c0c0d",
    paddingLeft: ".2rem",
    paddingRight: ".2rem",
    minWidth: "2rem",
    "&:after": {
      borderColor: "#a0a1a1",
    },
  },
  selectRootError: {
    fontFamily: "Montserrat",
    paddingLeft: ".2rem",
    paddingRight: ".2rem",
    minWidth: "2rem",
  },
  submitOrderBtn: {
    zIndex: "20",
    fontFamily: "Montserrat",
    width: "100%",
    "&.MuiButton-root": {
      color: "white",
      backgroundColor: "#1d6d86",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20rem",
    },
  },
  buttonDisabled: {
    "&.MuiButton-root": {
      backgroundColor: "#f0f0f0",
      color: "#0c0c0d",
    },
  },
}));

export { useStyles };
