import React from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "../../styles/DialogAddToCartBtnStyles";

const DialogAddToCartBtn = ({ handleClick, classes }) => {
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
