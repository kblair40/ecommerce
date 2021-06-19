import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { useDispatch } from "react-redux";

import QuantityUpdate from "./QuantityUpdate";
import { cartActions } from "../../store/cartSlice";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    width: "50%",
    minWidth: "34rem",
    display: "flex",
    fontFamily: "Montserrat",
    fontWeight: 300,
    padding: ".5rem 0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  // COLUMN #1
  mainInfoContainer: {
    // width: "100%",
    // minWidth: "15rem",  // MIGHT NEED THIS BACK
    maxWidth: "22rem",
    display: "flex",
    justifyContent: "space-between",
  },
  cartItemImageContainer: {
    minWidth: "6rem",
    maxWidth: "6rem",
    marginRight: "1rem",
  },
  cartItemImage: {
    display: "block",
    width: "100%",
    height: "auto",
    maxWidth: "100%",
  },
  mainInfo: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
  },
  itemTitle: {
    fontWeight: 500,
    width: "12rem",
  },
  mainInfoSubContainer: {
    display: "flex",
    flexDirection: "column",
  },
  info: {
    margin: 0,
  },

  // COLUMN #2
  updateCartActions: {
    marginTop: "1rem",
    width: "50rem", // was 15rem
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  qtyUpdateContainer: {
    [theme.breakpoints.down("sm")]: {
      marginRight: "1rem",
    },
  },
  removeBtnRoot: {
    padding: ".2rem",
  },
  removeItemBtnText: {
    margin: 0,
  },

  // COLUMN #3
  priceContainer: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    width: "10rem",
    fontWeight: 500,
  },
  priceSubtext: {
    marginTop: ".2rem",
    fontWeight: "300",
    fontSize: ".8rem",
  },
}));

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
        {/* FIRST COLUMN - Should display image on left, main product info in column to the right */}
        <div className={classes.mainInfoContainer}>
          <div className={classes.cartItemImageContainer}>
            <img
              className={classes.cartItemImage}
              src={item.image}
              alt={item.title}
            />
          </div>
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
        </div>

        {/* ACTUAL SECOND COLUMN */}
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
