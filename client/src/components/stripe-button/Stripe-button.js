import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_dIMUgaTC26ZEwte3V1ocoXK6004fWakSyJ";
  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful')
    }).catch(error => {
      console.log("Payment error: ", error)
      alert("There was an issue with your payment, Please be sure to use the provided credit card")
    })
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Store Ltd"
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
