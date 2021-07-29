import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  checkoutPageContainer: {
    position: "relative", // for positioning ThankYou modal
    marginTop: "3rem",
    display: "grid",
    gridTemplateColumns: "65% 35%",
    gridColumnGap: "1rem",
    minWidth: "22rem",
  },
  checkoutCart: {
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
    checkoutPageContainer: {
      gridTemplateColumns: "100%",
      justifyItems: "center",
    },
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
