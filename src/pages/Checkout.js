import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Cart from "../components/Cart/Cart";
import AddressForm from "../components/Forms/AddressForm";
import OrderDetail from "../components/Cart/OrderDetail";
import ThankYou from "../components/Cart/ThankYou";
import { useStyles } from "../styles/CheckoutStyles";
import { cartActions } from "../store/cartSlice";

const Checkout = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [thankYouModalShowing, setThankYouModalShowing] = useState(false);

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    setThankYouModalShowing(true);
    dispatch(cartActions.clearCart());
  };

  const handleClose = () => {
    setThankYouModalShowing(false);
  };

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
          <AddressForm handleOrderSubmit={handleOrderSubmit} />
        </div>
      </div>
      {thankYouModalShowing && <ThankYou handleClose={handleClose} />}
    </div>
  );
};

export default Checkout;
