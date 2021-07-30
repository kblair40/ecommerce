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

const PaymentForm = () => {
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

    const num = elements.getElement(CardNumberElement);
    const exp = elements.getElement(CardExpiryElement);
    const cvc = elements.getElement(CardCvcElement);

    exp.clear();
    num.clear();
    cvc.clear();
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
