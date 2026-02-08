import React from "react";

interface Step {
  icon: string; // <-- changed from React.ReactNode
  title: string;
  description: string;
  bg?: string;
  text?: string;
}

const steps: Step[] = [
  {
    icon: "https://img.icons8.com/?size=100&id=nCEJ53k3fryj&format=png&color=fdb80f",
    title: "Booking a Vehicle",
    description: "Select your ride quickly and easily.",
    bg: "bg-foreground",
    text: "text-white",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=qPjaEaXbpSKm&format=png&color=fdb80f",
    title: "Get a Driver",
    description: "A professional driver arrives at your location.",
    bg: "bg-white",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=u3c2ImZFIynC&format=png&color=fdb80f",
    title: "Enjoy your Ride",
    description: "Relax while we take you to destination.",
    bg: "bg-foreground",
    text: "text-white",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=5dSgwauapeOo&format=png&color=000000",
    title: "Pay your Taxi",
    description: "Safe and simple payment after your trip.",
    bg: "bg-yellow-400",
    text: "text-foreground",
  }
];

const WorkSteps: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 my-10 sm:my-16 md:my-20 mt-20 sm:mt-28 md:mt-34">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Section Heading */}
        <span className="text-primary font-medium">How We Work</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold text-foreground mt-2 mb-4">
          Easy Step For Book Your Taxi<span className="text-primary">.</span>
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base px-2">
          Booking your ride is simple and quick—just follow a few easy steps to get moving hassle-free. Enjoy a smooth, stress-free experience every time you travel with us.
        </p>

        {/* Steps */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between lg:space-x-8 space-y-8 sm:space-y-10 lg:space-y-0 mt-10 sm:mt-16 md:mt-20">

          {/* Dotted line between steps */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] border-t-2 border-dashed border-gray-300 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center max-w-xs"
            >
              {/* Icon wrapper */}
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-xl shadow-md ${step.bg} ${step.text ?? "text-foreground"
                  }`}
              >
                <img src={step.icon} alt={step.title} className="w-12 h-12" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="text-foreground/70 text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSteps;
