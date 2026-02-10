import React from "react";

interface Step {
  icon: string;
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
    <section className="relative pt-32 sm:pt-36 md:pt-40 lg:pt-48 pb-16 sm:pb-20 md:pb-24 my-10 sm:my-16 md:my-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-32 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Floating Particles */}
        <div className="absolute top-20 left-[15%] w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-[20%] w-3 h-3 bg-yellow-500/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-32 left-[25%] w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "2.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Enhanced Section Heading */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-bold tracking-wide uppercase">How It Works</span>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>

        {/* Gradient Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-black text-foreground mt-2 mb-4">
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent inline-block">
            Simple Steps to Book Your Ride
          </span>
          <span className="text-primary">.</span>
        </h2>

        <p className="text-foreground/70 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base px-2 leading-relaxed">
          Experience a seamless ride-booking process with RideMate. From entering your destination to real-time tracking and secure payments, we make every journey effortless.
        </p>

        {/* Decorative Line */}
        <div className="relative w-32 h-1 mx-auto mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full blur-sm animate-pulse" />
        </div>

        {/* Enhanced Steps */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between lg:space-x-8 space-y-10 sm:space-y-12 lg:space-y-0 mt-12 sm:mt-16">
          {/* Animated Connecting Line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] z-0">
            <div className="relative h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent blur-sm animate-pulse" />
            </div>
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative z-10 flex flex-col items-center text-center max-w-xs animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Enhanced Icon wrapper */}
              <div className={`relative w-20 h-20 flex items-center justify-center rounded-xl shadow-xl ${step.bg} ${step.text ?? "text-foreground"} transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden`}>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glowing border */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-yellow-500 to-primary opacity-30 blur-sm" />
                </div>

                <img
                  src={step.icon}
                  alt={step.title}
                  className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="mt-4 text-lg sm:text-xl font-bold group-hover:text-primary transition-colors duration-300">{step.title}</h3>
              <p className="text-foreground/70 group-hover:text-foreground text-sm mt-2 transition-colors duration-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default WorkSteps;
