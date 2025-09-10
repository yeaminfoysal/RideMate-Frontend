import React from "react";
import { Car, Wallet, Award, StretchVerticalIcon } from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg?: string;
  text?: string;
}

const steps: Step[] = [
  {
    icon: <Car className="w-8 h-8 text-yellow-500" />,
    title: "Booking a Taxi",
    description: "Lorem ipsum dolor sit amet, conscte adipisc elit.",
    bg: "bg-gray-900",
    text: "text-white",
  },
  {
    icon: <StretchVerticalIcon className="w-8 h-8 text-yellow-500" />,
    title: "Get a Driver",
    description: "Lorem ipsum dolor sit amet, conscte adipisc elit.",
    bg: "bg-white",
  },
  {
    icon: <Wallet className="w-8 h-8 text-yellow-500" />,
    title: "Pay your Taxi",
    description: "Lorem ipsum dolor sit amet, conscte adipisc elit.",
    bg: "bg-yellow-400",
    text: "text-gray-900",
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-500" />,
    title: "Enjoy your Ride",
    description: "Lorem ipsum dolor sit amet, conscte adipisc elit.",
    bg: "bg-gray-900",
    text: "text-white",
  },
];

const WorkSteps: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <span className="text-yellow-500 font-medium">How We Work</span>
        <h2 className="text-[50px] font-semibold text-foreground mt-2 mb-4">
          Easy Step For Book Your Taxi<span className="text-yellow-500">.</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero
          condimentum metus.
        </p>

        {/* Steps */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between lg:space-x-8 space-y-10 lg:space-y-0">
          {/* Dotted line background */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 border-t-2 border-dashed border-gray-300 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center max-w-xs"
            >
              {/* Icon wrapper */}
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-xl shadow-md ${step.bg} ${
                  step.text ?? "text-gray-900"
                }`}
              >
                {step.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSteps;
