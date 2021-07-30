import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  checkoutCartSection: {
    padding: "1rem .1rem",
    display: "flex",
    flexDirection: "column",
    width: "30%",
    // border: "1px solid black",
  },
  checkoutOrderDetail: {
    width: "100%",
  },
  checkoutForm: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    checkoutPageContainer: {
      gridTemplateColumns: "100%",
      gridColumnGap: 0,
    },
    checkoutCartSection: {
      width: "100%",
      flexDirection: "row",
    },
  },
  [theme.breakpoints.down("sm")]: {
    checkoutOrderDetail: {
      width: "50%",
    },
    checkoutForm: {
      width: "50%",
    },
  },
  [theme.breakpoints.down("xs")]: {
    checkoutCartSection: {
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid black",
    },
    checkoutOrderDetail: {
      border: "1px solid red",
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
    checkoutForm: {
      width: "100%",
    },
  },
}));

export default useStyles;
