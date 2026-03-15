import React from "react";
import { convertToCurrency } from "../../../utils/common";
import { toast } from "react-toastify";
import { useTheme } from "../../../ThemeContext";

type Props = {
  subtotal: number;
};

export default function OrderSummary({ subtotal }: Props) {
  const { theme } = useTheme();
  const resolveWithSomeData = new Promise((resolve) =>
    setTimeout(() => resolve("world"), 3000),
  );
  return (
    <div className="p-6 bg-white rounded-lg shadow h-fit dark:bg-gray-800 dark:text-white">
      <h3 className="text-[2rem] font-semibold mb-4">Order Summary</h3>

      <div className="space-y-3 text-lg">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{convertToCurrency(subtotal)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$5.00</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>$4.00</span>
        </div>

        <div className="flex justify-between pt-3 text-3xl font-semibold border-t">
          <span>Total</span>
          <span>{convertToCurrency(subtotal + 9)}</span>
        </div>
      </div>

      <button
        className="w-full btn"
        onClick={() =>
          toast.promise(resolveWithSomeData, {
            pending: "Opening payment gateway...",
            success: "Payment successful 🎉",
            error: "Payment cancelled ❌",
          },{
            theme: theme
          })
        }
      >
        {/* w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg */}
        Proceed to Checkout
      </button>
    </div>
  );
}
