import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import CartProduct from "./CartProduct";

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);

  return (
    <div>
      <ul>
        {cartState.items.map((item, idx) => {
          return <CartProduct key={uuid()} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Cart;
