import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price & 100;
  const publishableKey =
    "pk_test_51K4kKqEcXnKt4XZUdQg9L0FfNGET0UhjlaeS4dvmglG4TAl7OTaPDgYTumkBUnfQ2E9512I2B9WwmbcXbNMOrLDB00gYEdNHyV";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
