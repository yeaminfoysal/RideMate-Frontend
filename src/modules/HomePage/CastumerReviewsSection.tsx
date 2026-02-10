import React from "react";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Review {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Devina Mueller",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "RideMate made my trip stress-free, with a professional driver and smooth, comfortable ride experience throughout.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dave Beech",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    review:
      "Booking was simple, the cab arrived quickly, and the service felt safe, reliable, and affordable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Xavier Mcfarla",
    role: "CEO Brand",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "I love how convenient RideMate is—fast rides, friendly drivers, and excellent support every single time.",
    rating: 5,
  },
];

const CustomerReviews: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-12 sm:py-16 md:py-20 lg:py-24 pb-64 sm:pb-72 md:pb-80 lg:pb-96 lg:mb-40"
      style={{
        backgroundImage:
          "url('https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/glowing-london-taxi-light.webp')",
      }}
    >
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-primary" />
          Customers Feedback
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 leading-tight">
          Our Customer{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
            Reviews.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-3 sm:mt-4 md:mt-6 text-gray-200 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Hear from our happy riders and discover why people trust RideMate for safe and reliable journeys.
        </p>

        {/* Star Rating Summary */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-white font-semibold text-sm sm:text-base">4.9/5</span>
          <span className="text-gray-300 text-xs sm:text-sm">from 500+ reviews</span>
        </div>
      </div>

      {/* Review Cards */}
      <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-full z-20 max-w-6xl mx-auto mt-10 sm:mt-12 md:mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 sm:gap-6 justify-center px-4 sm:px-6">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={cn(
              "group relative bg-background dark:bg-[#131313] rounded-xl sm:rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 transform lg:translate-y-20 hover:-translate-y-2 transition-all duration-500 border border-gray-200 dark:border-gray-800 overflow-hidden",
              "animate-fade-in-up"
            )}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[100px]" />

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              {/* Profile Image with Badge */}
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-md group-hover:blur-lg transition-all duration-500" />
                  <img
                    src={review.image}
                    alt={review.name}
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-3 sm:border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Verified Badge */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary transition-all duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm md:text-base text-center text-muted-foreground leading-relaxed mb-4 sm:mb-6 min-h-[70px] sm:min-h-[80px]">
                "{review.review}"
              </p>

              {/* Divider */}
              <div className="relative h-px mb-3 sm:mb-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>

              {/* Author Info */}
              <div className="text-center">
                <h4 className="font-bold text-sm sm:text-base md:text-lg group-hover:text-primary transition-colors">
                  {review.name}
                </h4>
                <p className="text-primary text-[10px] sm:text-xs md:text-sm font-medium mt-0.5 sm:mt-1">
                  {review.role}
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;