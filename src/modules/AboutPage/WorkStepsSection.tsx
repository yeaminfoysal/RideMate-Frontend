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
    title: "Enter Pickup & Destination",
    description: "Input your location and where you want to go.",
    bg: "bg-foreground",
    text: "text-white",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=qPjaEaXbpSKm&format=png&color=fdb80f",
    title: "Find a Driver",
    description: "Get matched with a nearby driver instantly.",
    bg: "bg-white",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=u3c2ImZFIynC&format=png&color=fdb80f",
    title: "Track Your Ride in Real-Time",
    description: "Monitor your driver's location with live GPS.",
    bg: "bg-foreground",
    text: "text-white",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=5dSgwauapeOo&format=png&color=000000",
    title: "Pay Securely",
    description: "Complete payment via SSLCOMMERZ gateway.",
    bg: "bg-yellow-400",
    text: "text-foreground",
  }
];

const WorkSteps: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 my-10 sm:my-16 md:my-20 mt-20 sm:mt-28 md:mt-34">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Section Heading */}
        <span className="text-primary font-medium">How It Works</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold text-foreground mt-2 mb-4">
          Simple Steps to Book Your Ride<span className="text-primary">.</span>
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base px-2">
          Experience a seamless ride-booking process with RideMate. From entering your destination to real-time tracking and secure payments, we make every journey effortless.
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
