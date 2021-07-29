import React from "react";
import // CardElement,
//   Elements,
// useStripe,
// useElements,
"@stripe/react-stripe-js";

// const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const PaymentForm = () => {
  // const stripe = useStripe();
  // const elements = useElements();

  // const handleSubmit = async (event) => {
  // event.preventDefault();
  // const { error, paymentMethod } = await stripe.createPaymentMethod({
  //   type: "card",
  //   card: elements.getElement(CardElement),
  // });
  // };

  return (
    <div />
    // <form
    // onSubmit={handleSubmit}
    // >
    //  <CardElement />
    // <button
    // type="submit"
    // disabled={!stripe}
    // >
    // Pay
    // </button>
    // </form>
  );
};

export default PaymentForm;
