import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import makeStyles from "@material-ui/core/styles/makeStyles";

import CartIsEmpty from "./CartIsEmpty";
import CartProduct from "./CartProduct";

const useStyles = makeStyles({
  cartProductsContainer: {
    color: "#0c0c0d",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cartEmptyContainer: {
    fontFamily: "Montserrat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

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
    </div>
  );
};

export default Cart;
