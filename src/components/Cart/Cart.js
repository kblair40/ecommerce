import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import makeStyles from "@material-ui/core/styles/makeStyles";

import CartIsEmpty from "./CartIsEmpty";
import CartProduct from "./CartProduct";

const useStyles = makeStyles({
  cartProductsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // background: "red",
  },
  cartEmptyContainer: {
    fontFamily: "Montserrat",
    display: "flex",
    // background: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);
  const classes = useStyles();

  console.log("CART STATE:", cartState);

  if (!cartState.items.length) {
    return (
      <div className={classes.cartEmptyContainer}>
        <CartIsEmpty />;
      </div>
    );
  }

  return (
    <div
    // style={{ background: "black" }}
    >
      <ul className={classes.cartProductsContainer}>
        {cartState.items.map((item, idx) => {
          return <CartProduct key={uuid()} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Cart;
