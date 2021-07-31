import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Divider from "@material-ui/core/Divider";

import RemoveItemBtn from "./RemoveItemBtn";
import QuantityUpdate from "./QuantityUpdate";
import PriceInfo from "./PriceInfo";
import CartProduct from "./CartProduct";
import CartIsEmpty from "./CartIsEmpty";
import useStyles from "./styles";

const CartProducts = () => {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <React.Fragment>
      {cartItems.length ? (
        <ul className={classes.cartProductsContainer}>
          {cartItems.map((item) => {
            return (
              <React.Fragment>
                <div className={classes.productContainer}>
                  <CartProduct
                    key={uuid()}
                    id={item.id}
                    price={item.price}
                    image={item.image}
                    category={item.category}
                    title={item.title}
                    chosenSize={item.chosenSize}
                    quantity={item.quantity}
                  />
                  <div className={classes.cartActions}>
                    <div className={classes.priceAndQuantity}>
                      <QuantityUpdate
                        menuOptions={item.menuOptions}
                        quantity={item.quantity}
                        id={item.id}
                        price={item.price}
                      />
                      <PriceInfo quantity={item.quantity} price={item.price} />
                    </div>
                    <RemoveItemBtn price={item.price} id={item.id} />
                  </div>
                </div>
                <Divider className={classes.horizontalDivider} fullWidth />
              </React.Fragment>
            );
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
