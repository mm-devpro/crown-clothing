import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_hI4X6HfZOXQjm0r5ywmCL8S700eBxz7Cf3'

  const onToken = token => {
    console.log(token)
    alert('Payment successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clohting Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton