import React from "react";

import CartProducts from "./CartProducts";
import OrderDetail from "./OrderDetail";
import AddressForm from "./AddressForm";
import ThankYou from "./ThankYou";
// import PaymentForm from './PaymentForm';
import useStyles from "./styles";

const Cart = ({ thankYouModalShowing, handleClose, handleOrderSubmit }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CartProducts />

      <div className={classes.checkoutCartSection}>
        <section className={classes.checkoutOrderDetail}>
          <OrderDetail />
        </section>

        <section className={classes.checkoutAddressForm}>
          <AddressForm handleOrderSubmit={handleOrderSubmit} />
        </section>
      </div>

      {thankYouModalShowing && <ThankYou handleClose={handleClose} />}
    </React.Fragment>
  );
};

export default Cart;
