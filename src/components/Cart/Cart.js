import React from "react";

import CartProduct from "./CartProduct";
import { cartActions } from "../../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { PRODUCTS } from "../../constants";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  for (let product of cartState.items) {
    console.log("product:", product);
  }
  console.log("CART STATE:", cartState);
  return (
    <div>
      <ul>
        {cartState.items.map((item) => (
          <CartProduct />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
