import React from "react";
;

type Props = {
  steps: Step[];
  currentStep: number;
  activeColor?: string;
  inactiveColor?: string;
};

export default function ProgressStepper({
  steps,
  currentStep,
  activeColor = "bg-green-500 text-white",
  inactiveColor = "bg-gray-300 text-black",
}: Props) {
  return (
    <div className="hidden bg-white shadow md:block dark:bg-gray-950">
      <div className="max-w-5xl px-6 py-6 mx-auto">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;

            return (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all delay-200 ${isCompleted || isActive ? activeColor : inactiveColor}`}
                  >
                    {isCompleted ? "✓" : index + 1}
                  </div>
                  <span className="mt-2 text-sm dark:text-white">{step.label}</span>
                </div>
                {index !== steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mb-4 transition-all duration-500 ease-in-out
                ${index < currentStep ? activeColor : inactiveColor}`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
