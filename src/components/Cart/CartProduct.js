import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { useSelector, useDispatch } from "react-redux";

import QuantityUpdate from "./QuantityUpdate";
import { PRODUCTS } from "../../constants";
import { cartActions } from "../../store/cartSlice";

const useStyles = makeStyles({
  itemContainer: {
    display: "flex",
    fontFamily: "Montserrat",
    fontWeight: 300,
  },
  mainInfoContainer: {
    width: "70%",
    minWidth: "15rem",
    maxWidth: "20rem",
    display: "flex",
    justifyContent: "space-between",
  },
  mainInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  mainInfoSubContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    whiteSpace: "nowrap",
  },
  cartItemImageContainer: {
    width: "6rem",
    display: "flex",
    alignItems: "center",
  },
  cartItemImage: {
    maxWidth: "100%",
  },

  verticalDivider: {
    margin: "0 .5rem",
  },
  horizontalDivider: {
    margin: "1rem 0 .5rem 0",
  },
  info: {
    margin: 0,
  },
  itemTitle: {
    fontWeight: 500,
    minWidth: "8rem",
    maxWidth: "10rem",
  },
  removeItemBtn: {
    whiteSpace: "nowrap",
  },
  updateCartActions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

const CartProduct = ({ item }) => {
  const classes = useStyles();
  const chosenSize = useSelector((state) => state.cart.chosenSize);
  const dispatch = useDispatch();
  console.log("RECEIVED:", item);

  const handleQtyUpdate = (qty) => {
    dispatch(cartActions.updateQty({ id: item.id, newQty: qty }));
  };

  return (
    <>
      <div className={classes.itemContainer}>
        {/* FIRST COLUMN - Should display image on left, main product info in column to the right */}
        <div className={classes.mainInfoContainer}>
          <div className={classes.cartItemImageContainer}>
            <img className={classes.cartItemImage} src={item.image} />
          </div>
          <Divider className={classes.verticalDivider} orientation="vertical" />
          {/* SECOND COLUMN, But inside the first column */}
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
          <Divider className={classes.verticalDivider} orientation="vertical" />
        </div>

        {/* Third column */}
        <div className={classes.updateCartActions}>
          {/* REPLACE WITH SELECT DROPDOWN THAT CAN UPDATE QUANTITY */}
          {/* <div>Qty: {item.quantity}</div> */}
          <div>
            Qty:{" "}
            <QuantityUpdate
              handleQtyUpdate={handleQtyUpdate}
              quantity={item.quantity}
            />
          </div>
          <div>
            <Button variant="outlined" color="secondary">
              <p className={classes.removeItemBtn}>Remove Item</p>
            </Button>
          </div>
        </div>
        {/* FOURTH/LAST COLUMN */}
        <div></div>
      </div>
      <Divider className={classes.horizontalDivider} fullWidth />
    </>
  );
};

export default CartProduct;
