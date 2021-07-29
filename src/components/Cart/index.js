import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Fade from "@material-ui/core/Fade";

import CartIsEmpty from "./CartIsEmpty";
import CartProduct from "./CartProduct";
import useStyles from "./styles";

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);
  const classes = useStyles();

  if (!cartState.items.length) {
    return (
      <Fade in={true} timeout={400}>
        <div className={classes.cartEmptyContainer}>
          <CartIsEmpty />
        </div>
      </Fade>
    );
  }

  return (
    <div>
      <Fade in={true} timeout={500}>
        <ul className={classes.cartProductsContainer}>
          {cartState.items.map((item, idx) => {
            return <CartProduct key={uuid()} item={item} />;
          })}
        </ul>
      </Fade>
    </div>
  );
};

export default Cart;
