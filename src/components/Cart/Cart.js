import React from "react";

import CartProduct from "./CartProduct";
import { cartActions } from "../../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  for (let product of cartState.items) {
    console.log("product:", product);
  }

  return (
    <div>
      <ul>
        {cartState.items.map((item) => (
          <CartProduct item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
