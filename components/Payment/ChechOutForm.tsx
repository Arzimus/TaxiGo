
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { error } from 'console';
import React from 'react'

function ChechOutForm() {
  const stripe: any = useStripe();
  const elements: any = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      return;
    }

    const res = await fetch('/api/create-intent', {
      method: "POST",
      body: JSON.stringify({
        amount: 50
      }),
    });

    const secretKey = await res.json();

    const { error } = await stripe.confirmPayment({
      clientSecret: secretKey,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/"
      }
    })
  }
  return (
    <div className='flex flex-col justify-center items-center
    w-full mt-6
    '>
      <form onSubmit={handleSubmit}
        className='max-w-md'
      >
        <PaymentElement />
        <button
          type='submit'
          disabled={!stripe || !elements}
          className='w-full bg-yellow-500 p-2 rounded-lg mt-2 '
        >Pay</button>
      </form>
    </div>
  )
}

export default ChechOutForm
