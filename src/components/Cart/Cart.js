import React from "react";
import { v4 as uuid } from "uuid";

import CartProduct from "./CartProduct";
import { useSelector, useDispatch } from "react-redux";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  return (
    <div>
      <ul>
        {cartState.items.map((item, idx) => {
          console.log("ITEM MAPPING:", item);
          return <CartProduct key={uuid()} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Cart;
