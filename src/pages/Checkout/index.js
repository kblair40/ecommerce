import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Cart from "../../components/Cart/";
import { cartActions } from "../../store/cartSlice";
import useStyles from "./styles";

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
        <Cart
          thankYouModalShowing={thankYouModalShowing}
          handleClose={handleClose}
          handleOrderSubmit={handleOrderSubmit}
        />
      </div>
    </div>
  );
};

export default Checkout;
