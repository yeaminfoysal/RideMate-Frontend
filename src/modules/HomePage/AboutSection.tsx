import { MapPin, Shield, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "@/assets/calling-taxi.webp";

export default function AboutSection() {
  const features = [
    {
      icon: MapPin,
      title: "Live Ride Tracking",
      description: "Real-time GPS tracking with driver details and route visualization for complete transparency.",
      bgColor: "bg-gradient-to-br from-gray-900 to-gray-800",
      iconColor: "text-primary",
      accentColor: "from-primary/20",
    },
    {
      icon: Shield,
      title: "Emergency SOS Feature",
      description: "Quick access safety button to call police, notify emergency contacts, and share live location instantly.",
      bgColor: "bg-gradient-to-br from-primary to-yellow-500",
      iconColor: "text-black",
      accentColor: "from-yellow-400/30",
    },
    {
      icon: CreditCard,
      iconImage: "https://img.icons8.com/?size=30&id=85801&format=png&color=000000",
      title: "Secure Payment Gateway",
      description: "Dynamic fare calculation based on distance and traffic with SSLCOMMERZ integration.",
      bgColor: "bg-gradient-to-br from-white to-gray-50 border border-gray-200",
      iconColor: "text-primary",
      accentColor: "from-primary/10",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/50 py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 px-4 sm:px-6 lg:px-8 items-center relative z-10">
        {/* Left Image Section */}
        <div className="relative group lg:col-span-5 max-w-md mx-auto lg:mx-0 w-full">
          {/* Floating Badge */}
          <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20 bg-primary text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl shadow-xl font-bold text-[10px] sm:text-xs md:text-sm flex items-center gap-1.5 sm:gap-2 animate-bounce-slow">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full animate-pulse" />
            Trusted Platform
          </div>

          {/* Image Container */}
          <div className="relative">
            {/* Decorative Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl sm:rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />

            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl group-hover:shadow-primary/20 transition-all duration-500">
              <img
                src={Image}
                alt="Traveler booking RideMate taxi"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Stats Badge */}
          <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl shadow-xl p-2.5 sm:p-3 md:p-4 border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-foreground">100%</p>
                <p className="text-[9px] sm:text-[10px] text-muted-foreground">Safe Rides</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="space-y-5 sm:space-y-6 lg:col-span-7">
          {/* Header */}
          <div className="space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/10 text-primary px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full font-semibold text-[10px] sm:text-xs">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full animate-pulse" />
              About RideMate
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Full-Featured{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-yellow-500 bg-clip-text">
                Ride-Sharing Platform
              </span>
              {" "}For Everyone
            </h2>

            <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
              RideMate connects riders with drivers efficiently and securely. Built with modern MERN stack
              and enhanced with real-time tracking, analytics, and role-based access control for riders,
              drivers, and administrators.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-2.5 sm:space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "group/item flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                  "animate-fade-in-right"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div
                  className={cn(
                    "relative flex-shrink-0 p-2 sm:p-2.5 md:p-3 rounded-lg shadow-md group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-500",
                    feature.bgColor
                  )}
                >
                  {/* Icon Glow Effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 bg-gradient-to-br blur-lg",
                    feature.accentColor
                  )} />

                  {feature.iconImage ? (
                    <img
                      src={feature.iconImage}
                      alt={feature.title}
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 relative z-10"
                    />
                  ) : (
                    <feature.icon className={cn("w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 relative z-10", feature.iconColor)} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-0.5 sm:pt-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-0.5 group-hover/item:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <div className="opacity-0 group-hover/item:opacity-100 transform translate-x-0 group-hover/item:translate-x-2 transition-all duration-300">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
            <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-primary/30 text-xs sm:text-sm">
              Book a Ride Now
            </button>
            <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 text-xs sm:text-sm">
              Become a Driver
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
