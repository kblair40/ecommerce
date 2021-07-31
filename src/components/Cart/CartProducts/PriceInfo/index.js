import React from "react";

import useStyles from "./styles";

const PriceInfo = ({ price, quantity }) => {
  const classes = useStyles();

  return (
    <div className={classes.priceContainer}>
      <p className={classes.price}>${(price * quantity).toFixed(2)}</p>
      {quantity > 1 && <p className={classes.priceSubtext}>(${price} each)</p>}
    </div>
  );
};

export default PriceInfo;
