"use client";

import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({ children }) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="https://bici-izi.vercel.app/stripe/success" // TODO: localhost cuando se testea localmente
      cancelUrl="https://bici-izi.vercel.app/stripe/error" // TODO: localhost cuando se testea localmente
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}>
      {children}
    </CProvider>
  );
};

export default CartProvider;
