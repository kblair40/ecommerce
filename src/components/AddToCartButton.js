import React from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  btnRoot: {
    alignSelf: "flex-end",
    fontFamily: "Montserrat",
    position: "absolute",
    bottom: ".5rem",
    width: "95%",
    right: "2.5%",
    color: "#777",
    "&:hover": {
      background: "#fff",
      color: "#333",
    },
  },
};

const AddToCartButton = ({ classes, handleAddItemtoCart }) => {
  return (
    <Button
      onClick={handleAddItemtoCart}
      classes={{ root: classes.btnRoot }}
      variant="outlined"
    >
      add to cart
    </Button>
  );
};

export default withStyles(styles)(AddToCartButton);
