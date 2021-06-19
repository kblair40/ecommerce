import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Cart from "../components/Cart/Cart";
import AddressForm from "../components/Forms/AddressForm";

const useStyles = makeStyles((theme) => ({
  checkoutPageContainer: {
    marginTop: "3rem",
    display: "grid",
    gridTemplateColumns: "65% 32%",
    gridColumnGap: "1rem",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "100%",
      gridTemplateRows: "auto",
    },
  },
  "& @media screen and (max-width: 800px)": {
    flexDirection: "column",
  },
}));

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
