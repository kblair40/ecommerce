import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CartProducts from "./CartProducts";
import OrderDetail from "./OrderDetail";
import AddressForm from "./AddressForm";
import ThankYou from "./ThankYou";
import PaymentForm from "./PaymentForm";
import useStyles from "./styles";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const Cart = ({
  thankYouModalShowing,
  handleClose,
  handleAddressSubmit,
  formShowing,
  handlePaymentSubmit,
}) => {
  const classes = useStyles();
  // Add function that sets form showing to 'payment' once address is submitted

  return (
    <div className={classes.container}>
      <CartProducts />

      <div className={classes.checkoutCartSection}>
        <section className={classes.checkoutOrderDetail}>
          <OrderDetail />
        </section>

        <section className={classes.checkoutForm}>
          {formShowing === "address" ? (
            <AddressForm handleAddressSubmit={handleAddressSubmit} />
          ) : (
            <Elements stripe={stripePromise}>
              <PaymentForm handlePaymentSubmit={handlePaymentSubmit} />
            </Elements>
          )}
        </section>
      </div>

      {thankYouModalShowing && <ThankYou handleClose={handleClose} />}
    </div>
  );
};

export default Cart;
