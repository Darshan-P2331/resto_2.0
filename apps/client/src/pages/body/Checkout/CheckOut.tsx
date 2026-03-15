import { useState } from "react";
import ProgressStepper from "../../../components/ProgressStepper";
import Cart from "../Cart/Cart";
import PaymentPage from "./PaymentPage";
import Shipping from "./Shipping";

type Props = {};

export default function CheckOut({}: Props) {
  const [step, setStep] = useState(0);

  const steps: Step[] = [
    {
      label: "Cart",
      component: <Cart />,
    },
    {
      label: "Shipping",
      component: <Shipping />,
    },
    {
      label: "Payment",
      component: <PaymentPage />,
    },
  ];

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="bg-[#f7f7f7] dark:bg-gray-900">
      <ProgressStepper steps={steps} currentStep={step} />
      <section className="mx-auto">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${step * 100}%)` }}
          >
            {steps.map((step, i) => (
              <div key={i} className="min-w-full">
                {step.component}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-between mt-6">
        <button onClick={prev} className="px-4 py-2 bg-gray-200 rounded">
          Prev
        </button>

        <button
          onClick={next}
          className="px-4 py-2 text-white bg-green-500 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
