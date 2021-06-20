import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Cart from "../components/Cart/Cart";
import AddressForm from "../components/Forms/AddressForm";

const useStyles = makeStyles((theme) => ({
  checkoutPageContainer: {
    // background: "black",
    marginTop: "3rem",
    display: "grid",
    gridTemplateColumns: "65% 32%",
    justifyItems: "center",
    gridColumnGap: "1rem",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      justifySelf: "center",
      // gridTemplateColumns: "90%",
      gridTemplateRows: "auto",
    },
  },
  // "& @media screen and (max-width: 800px)": {
  //   flexDirection: "column",
  // },
}));

const Checkout = () => {
  const classes = useStyles();
  return (
    <div className={classes.checkoutPageContainer}>
      <Cart />
      <AddressForm />
    </div>
  );
};

export default Checkout;
