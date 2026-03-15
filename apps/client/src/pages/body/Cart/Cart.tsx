import { useState } from "react";
import { convertToCurrency } from "../../../utils/common";
import OrderSummary from "./OrderSummary";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
};

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 120,
      qty: 1,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 80,
      qty: 2,
      image: "https://via.placeholder.com/80",
    },
  ]);

  const updateQty = (id: number, qty: number) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, qty } : item)));
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="grid gap-8 p-6 mx-auto md:grid-cols-3">
      {/* Cart Items */}
      <div className="space-y-6 md:col-span-2">
        <h2 className="text-[3rem] font-semibold dark:text-white">Shopping Cart</h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 px-8 py-4 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-white"
          >
            <img
              src="https://res.cloudinary.com/dhtfc36hh/image/upload/v1635302070/Resto/products/o0iwwjg6rls08gfu8nbu.png"
              alt={item.name}
              className="object-cover w-40 h-40 rounded"
              loading="lazy"
            />

            <div className="flex-1">
              <h3 className="text-[1.5rem] font-medium">{item.name}</h3>
              <p className="text-lg text-gray-500 dark:text-gray-300">
                {convertToCurrency(item.price)}
              </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center border rounded">
              <button
                className="px-3 py-1"
                onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
              >
                -
              </button>

              <span className="px-3">{item.qty}</span>

              <button
                className="px-3 py-1"
                onClick={() => updateQty(item.id, item.qty + 1)}
              >
                +
              </button>
            </div>

            {/* Price */}
            <div className="w-20 text-2xl font-medium text-right">
              {convertToCurrency(item.price * item.qty)}
            </div>

            {/* Remove */}
            <button
              onClick={() => removeItem(item.id)}
              className="text-2xl text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <OrderSummary subtotal={subtotal} />
    </div>
  );
}
