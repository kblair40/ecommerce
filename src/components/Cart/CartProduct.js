import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { PRODUCTS } from "../../constants";

const useStyles = makeStyles({
  itemContainer: {
    display: "flex",
    // alignItems: 'center',
  },
  productImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  mainInfo: {
    display: "flex",
    flexDirection: "column",
  },
});

const CartProduct = () => {
  const classes = useStyles();
  console.log("PRODUCTS:", PRODUCTS);
  return (
    <div className={classes.itemContainer}>
      {/* FIRST COLUMN - Should display image on left, main product info in column to the right */}
      <div className={classes.mainInfo}>
        <img />
        {/* SECOND COLUMN, But inside the first column */}
        <div className={classes.mainInfo}>
          <div>{/* COMPANY? */}</div>
          <div>{/* PRODUCT NAME / TITLE? */}</div>
          <div>{/* SIZE as Size: MD */}</div>
          <div>{/* SKU as product's id */}</div>
        </div>
      </div>

      {/* Third column */}
      <div className={classes.secondaryInfo}>
        <div>{/* Qty as dropdown box */}</div>
        <div>{/* Remove Product button */}</div>
      </div>
      {/* FOURTH/LAST COLUMN */}
      <div></div>
    </div>
  );
};

export default CartProduct;
