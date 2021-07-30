import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  card: {
    // border: "1px solid rgba(0,0,0,0.2)",
    fontFamily: "Montserrat",
    padding: "1rem",
    minWidth: "17rem",
    "& h1": {
      margin: "0 0 1rem 0",
      fontFamily: "Oswald",
    },
  },
  form: {
    // border: "1px solid rgba(0,0,0,0.4)",
    minWidth: "15rem",
  },
  formRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "30rem",
    "& div": {
      width: "100%",
    },
  },
  inputLabel: {
    color: "#909191",
  },

  cardNumber: {
    width: "100%",
  },
  cardCvc: {
    marginRight: "1rem",
    width: "calc(100% - 1rem) !important",
  },
  cardExpiry: {},
  submitBtn: {
    fontFamily: "Montserrat",
    width: "100%",
    maxWidth: "30rem",
    "&.MuiButton-root": {
      color: "white",
      backgroundColor: "#1d6d86",
    },
  },

  // input classes specific to each stripe element's current state
  input: {
    margin: ".25rem 1rem 1rem 0",
    borderBottom: "1px solid #909191",
  },
  focus: {
    borderBottom: "1px solid #0c0c0d",
  },
  invalid: {
    color: "#ff4244",
  },
  complete: {
    color: "#5dca36",
  },
});

export default useStyles;
