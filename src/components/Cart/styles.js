import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  checkoutCartSection: {
    padding: "1rem .1rem",
    display: "flex",
    flexDirection: "column",
    width: "80%",
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
    checkoutAddressForm: {
      width: "50%",
    },
  },
  [theme.breakpoints.down("xs")]: {
    checkoutCartSection: {
      flexDirection: "column",
      alignItems: "center",
    },
    checkoutOrderDetail: {
      width: "100%",
    },
    checkoutAddressForm: {
      width: "100%",
    },
  },
}));

export default useStyles;
