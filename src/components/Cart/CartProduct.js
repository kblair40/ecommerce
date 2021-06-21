import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { useDispatch } from "react-redux";

import { useStyles } from "../../styles/CartProductStyles";
import QuantityUpdate from "./QuantityUpdate";
import { cartActions } from "../../store/cartSlice";

const CartProduct = ({ item }) => {
  const classes = useStyles(item.image);
  const dispatch = useDispatch();

  const handleQtyUpdate = (qty) => {
    dispatch(cartActions.updateQty({ id: item.id, newQty: qty }));
  };

  const handleRemoveFromCart = () => {
    dispatch(cartActions.removeFromCart({ id: item.id }));
  };

  return (
    <>
      <div className={classes.itemContainer}>
        {/* FIRST COLUMN - >sm - image on left, main info in own column on right */}
        <div className={classes.mainInfoContainer}>
          <div className={classes.cartItemImageContainer}>
            <img
              className={classes.cartItemImage}
              src={item.image}
              alt={item.title}
            />
          </div>
          <div className={classes.mainInfo}>
            <p className={classes.itemTitle}>{item.title}</p>
            <div className={classes.mainInfoSubContainer}>
              {item.chosenSize && (
                <p className={classes.info}>
                  Size: {item.chosenSize.toUpperCase()}
                </p>
              )}
              <p className={classes.info}>{item.category}</p>
              <p className={classes.info}>SKU #{item.id}</p>
            </div>
          </div>
        </div>

        {/* SECOND COLUMN */}
        <div className={classes.updateCartActions}>
          <div className={classes.qtyUpdateContainer}>
            Qty: &nbsp;
            <QuantityUpdate
              handleQtyUpdate={handleQtyUpdate}
              quantity={item.quantity}
              id={item.id}
              menuOptions={item.menuOptions}
            />
          </div>
          <div>
            <Button
              classes={{ root: classes.removeBtnRoot }}
              size="small"
              onClick={handleRemoveFromCart}
              variant="outlined"
              color="secondary"
            >
              <p className={classes.removeItemBtnText}>Remove Item</p>
            </Button>
          </div>
        </div>

        {/* THIRD/LAST COLUMN */}
        <div className={classes.priceContainer}>
          ${(item.price * item.quantity).toFixed(2)}
          {item.quantity > 1 && (
            <p className={classes.priceSubtext}>(${item.price} each)</p>
          )}
        </div>
      </div>
      <Divider className={classes.horizontalDivider} />
    </>
  );
};

export default CartProduct;
