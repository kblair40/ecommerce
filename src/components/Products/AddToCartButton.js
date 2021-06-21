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
    whiteSpace: "nowrap",
    background: "#1d6d86",
    color: "white",
    "&:hover": {
      background: "#1d6d86",
      color: "#white",
    },
  },
};

const AddToCartButton = ({ classes, handleProductClick }) => {
  return (
    <Button onClick={handleProductClick} classes={{ root: classes.btnRoot }}>
      add to cart
    </Button>
  );
};

export default withStyles(styles)(AddToCartButton);
