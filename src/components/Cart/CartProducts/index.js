import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import CartProduct from "./CartProduct";
import CartIsEmpty from "./CartIsEmpty";
import useStyles from "./styles";

const CartProducts = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const classes = useStyles();

  return (
    <React.Fragment>
      {cartItems.length ? (
        <ul className={classes.cartProductsContainer}>
          {cartItems.map((item) => {
            return <CartProduct key={uuid()} item={item} />;
          })}
        </ul>
      ) : (
        <div className={classes.cartEmptyContainer}>
          <CartIsEmpty />
        </div>
      )}
    </React.Fragment>
  );
};

export default CartProducts;
