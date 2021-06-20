import React from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  addToCart: {
    width: "40%",
    "&.MuiButton-root": {
      fontFamily: "Montserrat",
      background: "#ff4244",
      color: "white",
    },
  },
};
const DialogCloseBtn = ({ classes, handleClose }) => {
  return (
    <Button
      onClick={handleClose}
      className={classes.addToCart}
      variant="outlined"
    >
      Cancel
    </Button>
  );
};

export default withStyles(styles)(DialogCloseBtn);
