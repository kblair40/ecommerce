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
  addressFormTitle: {
    margin: "0 0 1rem 0",
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

  submitOrderBtn: {
    zIndex: "20",
    fontFamily: "Montserrat",
    width: "100%",
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
    // background: "rgba(0,0,0,0.15)",
    // width: "100%",
    // maxWidth: "30rem",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "1rem",
  },
  cityInput: {
    flex: "0 2 60%",
  },
  stateInput: {
    flex: "0 .5 12%",
  },
  zipInput: {
    flex: "0 1 22%",
  },
  selectRoot: {
    fontFamily: "Montserrat",
    color: "#0c0c0d",
    paddingLeft: ".2rem",
    paddingRight: ".2rem",
    // minWidth: "2rem",
    "&:after": {
      borderColor: "#a0a1a1",
    },
  },
  selectRootError: {
    fontFamily: "Montserrat",
    paddingLeft: ".2rem",
    paddingRight: ".2rem",
    // minWidth: "2rem",
  },
}));

export { useStyles };
