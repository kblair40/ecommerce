import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import makeStyles from "@material-ui/core/styles/makeStyles";

import CartProduct from "./CartProduct";

const useStyles = makeStyles({
  cartProductsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // background: "red",
  },
});

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);
  const classes = useStyles();

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
