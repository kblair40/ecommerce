import React from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { useSelector } from "react-redux";
import Fade from "@material-ui/core/Fade";

import useStyles from "./styles";

const OrderDetail = () => {
  const classes = useStyles();
  const subtotal = parseFloat(
    useSelector((state) => state.cart.subtotal).toFixed(2)
  );
  const minimumMet = subtotal >= 50;
  const tax = parseFloat((subtotal * 0.07).toFixed(2));

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
          <div className={classes.categoryAmount}>${subtotal.toFixed(2)}</div>
        </div>

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
