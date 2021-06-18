import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Cart from "../components/Cart/Cart";
import CheckoutForm from "../components/Cart/CheckoutForm";

const useStyles = makeStyles({
  checkoutPageContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  "& @media screen and (max-width: 800px)": {
    flexDirection: "column",
  },
});

const Checkout = () => {
  const classes = useStyles();
  return (
    <div className={classes.checkoutPageContainer}>
      <Cart />
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
