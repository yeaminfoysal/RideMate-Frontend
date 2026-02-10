import React from "react";
import { CheckCircle } from "lucide-react";
import WeOfferCard from "../HomePage/WeOfferCard";

const featuresLeft = [
  "Real-Time Ride Tracking",
  "Role-Based Access Control",
  "Emergency SOS Feature",
  "JWT Authentication & Google OAuth",
];

const featuresRight = [
  "Paginated Ride History",
  "Dynamic Fare Calculation",
  "SSLCOMMERZ Payment Gateway",
  "24/7 Customer Support",
];

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-background my-10 sm:my-16 md:my-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Floating Particles */}
        <div className="absolute top-32 left-[15%] w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-48 right-[20%] w-3 h-3 bg-yellow-500/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-40 left-[25%] w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "2.5s" }} />
        <div className="absolute bottom-56 right-[30%] w-3 h-3 bg-yellow-400/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Top Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="animate-fade-in">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-bold tracking-wide uppercase">About RideMate</span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>

          {/* Gradient Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-snug mb-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent inline-block">
              Full-Featured <br /> Ride-Sharing Platform
            </span>
            <span className="text-primary">.</span>
          </h2>

          <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
            RideMate connects riders with drivers efficiently and securely. Built with modern MERN stack and enhanced with real-time tracking, analytics, and role-based access control for riders, drivers, and administrators.
          </p>

          {/* Decorative Line */}
          <div className="relative mt-6 w-24 h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full blur-sm animate-pulse" />
          </div>

          {/* Enhanced Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-6">
            {[...featuresLeft, ...featuresRight].map((item, i) => (
              <div
                key={i}
                className="group flex items-center text-foreground/60 hover:text-foreground text-sm sm:text-base transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="relative mr-2 shrink-0">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CheckCircle className="relative text-primary w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
              </div>
            ))}
          </div>

          {/* Enhanced Support Contact */}
          <div className="relative group flex items-center mt-8 p-4 rounded-2xl bg-gradient-to-br from-background via-background to-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-xl">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Support Person"
                className="relative w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300"
              />
            </div>
            <div className="ml-4">
              <p className="text-muted-foreground text-xs sm:text-sm">We Are Available 24/7</p>
              <p className="font-bold text-base sm:text-lg">
                Support & Booking:{" "}
                <span className="text-primary group-hover:text-yellow-500 transition-colors duration-300">Available Anytime</span>
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Right Images */}
        <div className="flex gap-4 sm:gap-6 justify-center flex-col sm:flex-row animate-fade-in">
          <div className="relative group w-full sm:w-1/2">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-yellow-500/5 rounded-2xl rotate-2 group-hover:rotate-3 transition-transform duration-500" />

            <div className="relative">
              <img
                src="https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/trip-travel-and-vacations-concept-woman.webp"
                alt="Woman with luggage at home"
                className="relative rounded-2xl shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 w-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          <div className="relative group w-full sm:w-1/2">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-primary/10 rounded-2xl -rotate-2 group-hover:-rotate-3 transition-transform duration-500" />

            <div className="relative">
              <img
                src="https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/female-traveler-trying-to-chatch-car.webp"
                alt="Traveler hailing cab"
                className="relative rounded-2xl shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 w-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* WeOffer Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-6 sm:gap-8 relative z-10">
        <WeOfferCard
          title="Support All Payment"
          desc="Seamless transactions with every payment method"
          bgMain="bg-[#212121]"
          textClr="text-white"
          bgIcon="bg-primary"
          mainIcon="https://img.icons8.com/?size=100&id=85801&format=png&color=000000"
          icon1="https://img.icons8.com/?size=100&id=87505&format=png&color=ffffff"
          icon2="https://img.icons8.com/?size=100&id=zssVYAAiltQy&format=png&color=ffffff"
          icon3="https://img.icons8.com/?size=100&id=Vr5TGbc9C4Ma&format=png&color=ffffff"
          icon4="https://img.icons8.com/?size=100&id=SuYRJWCg1Sdz&format=png&color=ffffff"
        />
        <WeOfferCard
          title="Safety First"
          textClr="text-black"
          desc="Prioritizing your security on every ride"
          bgMain="bg-primary"
          bgIcon="bg-black"
          mainIcon="https://img.icons8.com/?size=100&id=10483&format=png&color=FCC419"
          icon1="https://img.icons8.com/?size=100&id=59751&format=png&color=000000"
          icon2="https://img.icons8.com/?size=100&id=HtoPj7ftiHFM&format=png&color=000000"
          icon1Text="Guarantee"
          icon2Text="Quick Ride"
        />
        <WeOfferCard
          title="100% Digital"
          textClr="text-black"
          desc="Fully digital experience, fast and paperless"
          bgMain="bg-white"
          bgIcon="bg-primary"
          mainIcon="https://img.icons8.com/?size=100&id=11474&format=png&color=000000"
          icon1="https://img.icons8.com/?size=100&id=95294&format=png&color=fdb813"
          icon1Text="Apple"
          icon2="https://img.icons8.com/?size=100&id=C0IckHPpZZCE&format=png&color=fdb813"
          icon2Text="Android"
        />
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default AboutSection;
