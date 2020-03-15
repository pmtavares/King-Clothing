import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_J4oHrfl4zLDhaVkVX945juKA00toVLX6UI'
    const onToken = token => {
        console.log(token)
        alert("Payment Successful");
    }

    return(
        <StripeCheckout 
            label='Pay now'
            name='King Clothing Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton