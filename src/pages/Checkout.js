import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Cart from "../components/Cart/Cart";
import AddressForm from "../components/Forms/AddressForm";

const useStyles = makeStyles({
  checkoutPageContainer: {
    display: "grid",
    flexWrap: "wrap",
    gridTemplateColumns: "65% 32%",
    gridColumnGap: "1rem",
  },
  "& @media screen and (max-width: 800px)": {
    flexDirection: "column",
  },
});

const Checkout = () => {
  const classes = useStyles();
  return (
    <div className={classes.checkoutPageContainer}>
      <Cart />
      <AddressForm />
    </div>
  );
};

export default Checkout;
