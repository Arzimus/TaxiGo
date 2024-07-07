'use client'
import ChechOutForm from '@/components/Payment/ChechOutForm'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useContext } from 'react'

function Payment() {

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any)

  const options: any = {
    mode: 'payment',
    amount: 500,
    currency: 'usd'
  };

  return (
    <Elements stripe={stripePromise} options={options} >
      <ChechOutForm />
    </Elements>
  )
}

export default Payment