import React from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "./styles";

const AddToCartButton = ({ classes, handleProductClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={handleProductClick}
      classes={{ root: classes.btnRoot }}
    >
      add to cart
    </Button>
  );
};

export default withStyles(styles)(AddToCartButton);
