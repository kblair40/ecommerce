import React, { useState, useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { useSelector } from "react-redux";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  orderDetailCard: {
    marginTop: "1rem",
    color: "#0c0c0d",
    display: "flex",
    flexDirection: "column",
    minWidth: "15.625rem",
    maxWidth: "25rem",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  detailRow: {
    display: "flex",
    margin: ".25rem 0",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailCategory: {
    fontFamily: "Montserrat",
    fontSize: "1.4rem",
  },
  categoryAmount: {
    fontFamily: "Oswald",
    fontSize: "1.2rem",
  },
  amountUntilMet: {
    fontFamily: "Montserrat",
    fontSize: ".9rem",
    color: "#ff4244",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
    },
  },
  orderTotal: {
    fontWeight: "500",
  },
}));

const OrderDetail = () => {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.items);
  const [minimumMet, setMinimumMet] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    let subtotal = 0;
    for (let item of cartItems) {
      subtotal += item.price * item.quantity;
    }
    setSubtotal(subtotal.toFixed(2));
    if (subtotal > 50) {
      setMinimumMet(true);
    }
    setTax((subtotal * 0.07).toFixed(2));
  }, [cartItems]);

  return (
    <Fade in={true} timeout={400}>
      <Card elevation={0} className={classes.orderDetailCard}>
        {!minimumMet && (
          <div className={classes.amountUntilMet}>
            You're ${(50 - parseFloat(subtotal)).toFixed(2)} away from free
            shipping!
          </div>
        )}
        <div className={classes.detailRow}>
          <div className={classes.detailCategory}>Subtotal:</div>
          <div className={classes.categoryAmount}>${subtotal}</div>
        </div>

        {/* Shipping <hover icon displaying $ amount until free>  $$$ */}
        <div className={classes.detailRow}>
          <div className={classes.detailCategory}>Shipping:</div>
          <div className={classes.categoryAmount}>
            {minimumMet ? "Free" : "$8.00"}
          </div>
        </div>
        <div className={classes.detailRow}>
          <div className={classes.detailCategory}>Tax:</div>
          <div className={classes.categoryAmount}>${tax}</div>
        </div>
        <Divider style={{ marginTop: ".5rem" }} />
        <div className={classes.detailRow}>
          <div className={`${classes.detailCategory} ${classes.orderTotal}`}>
            Order Total:
          </div>
          {minimumMet ? (
            <div className={classes.categoryAmount}>
              ${(parseFloat(tax) + parseFloat(subtotal)).toFixed(2)}
            </div>
          ) : (
            <div className={classes.categoryAmount}>
              ${(8 + parseFloat(tax) + parseFloat(subtotal)).toFixed(2)}
            </div>
          )}
        </div>
      </Card>
    </Fade>
  );
};

export default OrderDetail;
