import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  checkoutPageContainer: {
    marginTop: "3rem",
    display: "grid",
    gridTemplateColumns: "65% 35%",
    gridColumnGap: "1rem",
  },
  checkoutCart: {},
  checkoutCartSection: {
    padding: "1rem .1rem",
    // background: "rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "auto",
  },
  checkoutOrderDetail: {
    width: "100%",
  },
  checkoutAddressForm: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    checkoutPageContainer: {
      gridTemplateColumns: "100%",
      // border: "3px solid red",
    },
    checkoutCartSection: {
      // border: "3px solid red",
      flexDirection: "row",
      // justifyContent: "space-around",
    },
  },
  [theme.breakpoints.down("sm")]: {
    checkoutPageContainer: {
      // border: "3px solid green",
      gridTemplateColumns: "100%",
      justifyItems: "center",
    },
    // NAV BUTTONS MOVE TO SEPARATE MENU AT 'SM' DOWN
    checkoutOrderDetail: {
      width: "50%",
    },
    checkoutAddressForm: {
      width: "50%",
    },
    checkoutCartSection: {
      // border: "3px solid green",
    },
  },
  [theme.breakpoints.down("xs")]: {
    checkoutOrderDetail: {
      // width: "100%",
    },
    checkoutCartSection: {
      // border: "3px solid blue",
      flexDirection: "column",
      alignItems: "center",
    },
    checkoutPageContainer: {
      // border: "3px solid blue",
    },
  },
}));

export { useStyles };
