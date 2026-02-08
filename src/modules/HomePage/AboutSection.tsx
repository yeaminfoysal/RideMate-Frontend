import { MapPin, Car, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "@/assets/calling-taxi.webp";

export default function AboutSection() {
  const features = [
    {
      icon: MapPin,
      title: "Long Distance Trip",
      description: "Comfortable rides for your longer journeys.",
      bgColor: "bg-gradient-to-br from-gray-900 to-gray-800",
      iconColor: "text-primary",
      accentColor: "from-primary/20",
    },
    {
      icon: Car,
      title: "Taxi Tour Services",
      description: "Flexible options with cars and bikes.",
      bgColor: "bg-gradient-to-br from-primary to-yellow-500",
      iconColor: "text-black",
      accentColor: "from-yellow-400/30",
    },
    {
      icon: DollarSign,
      iconImage: "https://img.icons8.com/?size=30&id=85801&format=png&color=000000",
      title: "Dynamic Fair Calculation",
      description: "Smart pricing based on traffic and distance.",
      bgColor: "bg-gradient-to-br from-white to-gray-50 border border-gray-200",
      iconColor: "text-primary",
      accentColor: "from-primary/10",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/50 py-12 sm:py-16">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-4 lg:px-8 items-center relative z-10">
        {/* Left Image Section - Reduced Width */}
        <div className="relative group lg:col-span-5">
          {/* Floating Badge */}
          <div className="absolute -top-4 -left-4 z-20 bg-primary text-black px-4 py-2 rounded-xl shadow-xl font-bold text-xs sm:text-sm flex items-center gap-2 animate-bounce-slow">
            <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
            Trusted Worldwide
          </div>

          {/* Image Container */}
          <div className="relative">
            {/* Decorative Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />

            <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-primary/20 transition-all duration-500">
              <img
                src={Image}
                alt="Traveler with luggage calling taxi"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Stats Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-3 sm:p-4 border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">500K+</p>
                <p className="text-[10px] text-muted-foreground">Happy Riders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Section - Increased Width */}
        <div className="space-y-6 lg:col-span-7">
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full font-semibold text-xs">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              About RideMate
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Trusted Cab Services In All Over The{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                World.
              </span>
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              RideMate is your reliable travel partner, delivering safe, comfortable, and trusted cab services across the globe.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "group/item flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                  "animate-fade-in-right"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div
                  className={cn(
                    "relative flex-shrink-0 p-3 rounded-lg shadow-md group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-500",
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
                      className="w-8 h-8 relative z-10"
                    />
                  ) : (
                    <feature.icon className={cn("w-8 h-8 relative z-10", feature.iconColor)} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-base sm:text-lg font-bold mb-0.5 group-hover/item:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <div className="opacity-0 group-hover/item:opacity-100 transform translate-x-0 group-hover/item:translate-x-2 transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-primary"
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
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-primary/30 text-sm">
              Get Started Now
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
