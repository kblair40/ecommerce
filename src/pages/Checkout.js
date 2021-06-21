import React from "react";

import Cart from "../components/Cart/Cart";
import AddressForm from "../components/Forms/AddressForm";
import { useStyles } from "../styles/CheckoutStyles";

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
