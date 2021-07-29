import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Cart from "../../components/Cart/";
import AddressForm from "../../components/Forms/AddressForm/";
import OrderDetail from "../../components/Cart/OrderDetail/";
import ThankYou from "../../components/Cart/ThankYou/";
import PaymentForm from "../../components/Forms/PaymentForm/";
import { cartActions } from "../../store/cartSlice";
import useStyles from "./styles";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

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
    <Elements stripe={stripePromise}>
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
      <div className={classes.paymentForm}>
        <PaymentForm />
      </div>
    </Elements>
  );
};

export default Checkout;
