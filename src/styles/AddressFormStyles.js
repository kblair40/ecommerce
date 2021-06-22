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
    minWidth: "15.625rem",
  },
  addressFormTitle: {
    margin: "0 0 1rem 0",
    whiteSpace: "nowrap",
  },
  inputRoot: {
    width: "100%",
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

  submitOrderBtn: {
    fontFamily: "Montserrat",
    width: "100%",
    maxWidth: "30rem",
    "&.MuiButton-root": {
      color: "white",
      backgroundColor: "#1d6d86",
    },
  },
  buttonDisabled: {
    "&.MuiButton-root": {
      backgroundColor: "#f0f0f0",
      color: "#0c0c0d",
    },
  },

  // LAST ROW (city, state, zip)
  multipleInputRow: {
    width: "100%",
    maxWidth: "30rem",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "1rem",
  },
  cityInput: {
    width: "49%",
    minWidth: "10.5rem",
    marginBottom: "1rem",
  },
  stateInput: {
    width: "19%",
    minWidth: "3rem",
  },
  zipInput: {
    width: "29%",
    minWidth: "6rem",
  },
  [theme.breakpoints.down("md")]: {
    cityInput: {
      width: "74%",
      minWidth: "10.5rem",
      marginBottom: "1rem",
    },
    stateInput: {
      width: "24%",
      minWidth: "3rem",
    },
    zipInput: {
      width: "50%",
      minWidth: "6rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    cityInput: {
      width: "100%",
      minWidth: "10.5rem",
      marginBottom: "1rem",
    },
    stateInput: {
      width: "28%",
      minWidth: "3rem",
    },
    zipInput: {
      width: "65%",
      minWidth: "6rem",
    },
  },
  selectRoot: {
    fontFamily: "Montserrat",
    color: "#0c0c0d",
    paddingLeft: ".2rem",
    paddingRight: ".2rem",
    width: "100%",
    "&:after": {
      borderColor: "#a0a1a1",
    },
  },
  selectRootError: {
    fontFamily: "Montserrat",
    paddingLeft: ".2rem",
    paddingRight: ".2rem",
  },
}));

export { useStyles };
