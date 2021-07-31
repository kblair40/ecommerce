import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
} from "@stripe/react-stripe-js";
import classNames from "classnames";

import useStyles from "./styles";

const PaymentForm = ({ handlePaymentSubmit }) => {
  const classes = useStyles();
  const elements = useElements();

  const cardInputClasses = {
    base: classes.input,
    complete: classes.complete,
    invalid: classes.invalid,
    focus: classes.focus,
  };

  const placeholderStyle = {
    base: {
      "::placeholder": {
        color: "rgba(0,0,0,0.2)",
      },
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const cardNumber = elements.getElement(CardNumberElement);
    const cardExp = elements.getElement(CardExpiryElement);
    const cardCvc = elements.getElement(CardCvcElement);

    cardExp.clear();
    cardNumber.clear();
    cardCvc.clear();

    handlePaymentSubmit(event);
  };

  return (
    <Card className={classes.card} elevation={0}>
      <h1>Payment Details</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formRow}>
          <div>
            <label className={classes.inputLabel} htmlFor="cardNumber">
              Card Number
            </label>
            <CardNumberElement
              id="cardNumber"
              name="cardNumber"
              className={classNames(classes.cardNumber)}
              options={{
                style: placeholderStyle,
                classes: cardInputClasses,
              }}
            />
          </div>
        </div>

        <div className={classes.formRow}>
          <div>
            <label className={classes.inputLabel} htmlFor="cardCvc">
              CVC
            </label>
            <CardCvcElement
              id="cardCvc"
              name="cardCvc"
              className={classNames(classes.cardCvc)}
              options={{
                style: placeholderStyle,
                classes: cardInputClasses,
              }}
            />
          </div>

          <div>
            <label className={classes.inputLabel} htmlFor="cardExpiry">
              Expiration Date
            </label>

            <CardExpiryElement
              id="cardExpiry"
              name="cardExpiry"
              className={classNames(classes.cardExpiry)}
              options={{
                style: placeholderStyle,
                classes: cardInputClasses,
              }}
            />
          </div>
        </div>
        <Button
          type="submit"
          className={classes.submitBtn}
          variant="contained"
          disableFocusRipple
        >
          Pay
        </Button>
      </form>
    </Card>
  );
};

export default PaymentForm;
