import { useState } from "react";
import OrderSummary from "../Cart/OrderSummary";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type Props = {};

export default function PaymentPage({}: Props) {
  const [loading, setLoading] = useState(false);
  const order = {
    subtotal: 1299,
    shipping: 50,
    tax: 30,
  };

  const total = order.subtotal + order.shipping + order.tax;

  return (
    <div className="grid gap-8 p-6 mx-auto md:grid-cols-2">
      {/* Shipping Address */}
      <div className="p-6 space-y-4 bg-white shadow rounded-xl dark:bg-gray-800">
        <h2 className="text-[3rem] font-semibold dark:text-white">
          Shipping Address
        </h2>

        <div className="text-xl text-gray-600 dark:text-gray-300">
          <p className="font-medium">Rahul Sharma</p>
          <p>123 MG Road</p>
          <p>Bangalore, Karnataka</p>
          <p>560001</p>
          <p>Phone: 9876543210</p>
        </div>
      </div>

      {/* Order Summary */}
      <OrderSummary subtotal={order.subtotal} />
    </div>
  );
}
