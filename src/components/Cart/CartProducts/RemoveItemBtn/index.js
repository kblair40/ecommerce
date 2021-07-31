import React from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

import { cartActions } from "../../../../store/cartSlice";
import useStyles from "./styles";

const RemoveItemBtn = ({ id, price }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(
      cartActions.removeFromCart({
        id,
        price,
      })
    );
  };

  return (
    <div className={classes.container}>
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
  );
};

export default RemoveItemBtn;
