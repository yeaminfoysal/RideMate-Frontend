import React from "react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

// Card props interface
interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  tag: string;
  date?: string;
  readTime?: string;
  index?: number;
}

// Reusable Card Component
const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  image,
  tag,
  date = "Jan 15, 2026",
  readTime = "5 min read",
  index = 0,
}) => {
  return (
    <div
      className={cn(
        "group relative bg-background dark:bg-[#131313] rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-800",
        "animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-52 lg:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Tag Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-primary text-black px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg font-semibold text-xs shadow-lg backdrop-blur-sm">
            <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            {tag}
          </div>
        </div>

        {/* Read More Button (appears on hover) */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <button className="bg-white dark:bg-gray-900 text-black dark:text-white p-2 sm:p-3 rounded-full shadow-xl hover:bg-primary hover:text-black transition-colors duration-300">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
        {/* Meta Info */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base md:text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className=" text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Divider */}
        <div className="relative h-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm group/link cursor-pointer">
          <span className="group-hover/link:underline">Read More</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

// Blog data array
const blogPosts = [
  {
    title: "Real-Time Ride Tracking: Stay Connected Every Mile",
    description:
      "Discover how RideMate's live GPS tracking keeps you informed throughout your journey. Track your driver's location, view estimated arrival times, and share your ride status with loved ones for complete peace of mind.",
    image:
      "https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/taxi-sign.webp",
    tag: "Technology",
    date: "Feb 8, 2026",
    readTime: "5 min read",
  },
  {
    title: "Emergency SOS: Your Safety Companion on Every Ride",
    description:
      "Learn how RideMate's integrated SOS feature provides instant access to emergency services, automatic location sharing with your trusted contacts, and direct police contact during rides. Safety is our top priority.",
    image:
      "https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/taxi-african-woman-using-phone-on-back-seat.webp",
    tag: "Safety",
    date: "Feb 5, 2026",
    readTime: "4 min read",
  },
  {
    title: "Seamless Payments: All Methods Welcome with SSLCOMMERZ",
    description:
      "From cash to digital wallets, RideMate supports every payment method. Explore how our SSLCOMMERZ integration ensures secure transactions with dynamic fare calculation based on real-time traffic and distance.",
    image:
      "https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/calling-a-taxi-with-phone.webp",
    tag: "Payment",
    date: "Feb 2, 2026",
    readTime: "6 min read",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 my-12 sm:my-16 md:my-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-6">
        <div className="space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
            Our News
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Blog &{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-yellow-500 bg-clip-text">
              Articles.
            </span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            Stay updated with the latest news, tips, and insights from the world of ride-sharing and transportation.
          </p>
        </div>

        {/* Show All Button */}
        <button className="group/btn relative bg-gray-900 dark:bg-white text-primary dark:text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 text-xs sm:text-sm md:text-base font-semibold shadow-lg hover:shadow-xl overflow-hidden w-full sm:w-auto">
          <span className="relative z-10 flex items-center justify-center gap-2">
            Show All News
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            description={post.description}
            image={post.image}
            tag={post.tag}
            date={post.date}
            readTime={post.readTime}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;