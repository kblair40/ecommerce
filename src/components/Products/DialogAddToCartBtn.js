import React from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import { useSelector } from "react-redux";

const styles = {
  addToCart: {
    width: "60%",
    "&.MuiButton-root": {
      fontFamily: "Montserrat",
      background: "#1d6d86",
      color: "white",
    },
  },
};

const DialogAddToCartBtn = ({ handleClick, classes }) => {
  const cartItems = useSelector((state) => state.cart.items);
  //   const hasError = useSelector((state) => state.cart.hasError);
  const cartIsEmpty = cartItems.length > 0;

  //   const handleAddToCartClick = () => {
  //     handleClick(cartIsEmpty);
  //   };

  return (
    <Button
      onClick={handleClick}
      className={classes.addToCart}
      variant="outlined"
    >
      Add To Cart
    </Button>
  );
};

export default withStyles(styles)(DialogAddToCartBtn);
