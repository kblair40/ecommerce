import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
// import Card from "@material-ui/core/Card";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
import {
  CardElement,
  //   Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;
