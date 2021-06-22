import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { useStyles } from "../../styles/CartStyles";

import CartIsEmpty from "./CartIsEmpty";
import CartProduct from "./CartProduct";
import OrderDetail from "./OrderDetail";

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);
  const classes = useStyles();

  if (!cartState.items.length) {
    return (
      <div className={classes.cartEmptyContainer}>
        <CartIsEmpty />
      </div>
    );
  }

  return (
    <div>
      <ul className={classes.cartProductsContainer}>
        {cartState.items.map((item, idx) => {
          return <CartProduct key={uuid()} item={item} />;
        })}
      </ul>
      <OrderDetail />
    </div>
  );
};

export default Cart;
