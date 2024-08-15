"use client"

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

type CheckoutFormProps = {
  product: {}
  clientSecret: string
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
)

export function CheckoutForm({ product, clientSecret }: CheckoutFormProps) {
  return <Elements stripe={stripePromise} options={{ clientSecret }}></Elements>
}

function Form() {
  const stripe = useStripe()
  const elements = useElements()

  return <PaymentElement />
}
