import React from "react";

import Cart from "../components/Cart/Cart";
import AddressForm from "../components/Forms/AddressForm";
import OrderDetail from "../components/Cart/OrderDetail";

import { useStyles } from "../styles/CheckoutStyles";

const Checkout = () => {
  const classes = useStyles();
  return (
    <div className={classes.checkoutPageContainer}>
      <div className={classes.checkoutCart}>
        <Cart />
      </div>
      <div className={classes.checkoutCartSection}>
        <div className={classes.checkoutOrderDetail}>
          <OrderDetail />
        </div>
        <div className={classes.checkoutAddressForm}>
          <AddressForm />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
