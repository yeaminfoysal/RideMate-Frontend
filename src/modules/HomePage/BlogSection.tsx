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
        "group relative bg-background dark:bg-[#131313] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-800",
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
          className="w-full h-56 sm:h-64 md:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Tag Badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center gap-2 bg-primary text-black px-3 py-1.5 rounded-lg font-semibold text-xs shadow-lg backdrop-blur-sm">
            <Tag className="w-3 h-3" />
            {tag}
          </div>
        </div>

        {/* Read More Button (appears on hover) */}
        <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <button className="bg-white dark:bg-gray-900 text-black dark:text-white p-3 rounded-full shadow-xl hover:bg-primary hover:text-black transition-colors duration-300">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 space-y-4">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Divider */}
        <div className="relative h-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-primary font-semibold text-sm group/link cursor-pointer">
          <span className="group-hover/link:underline">Read More</span>
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

// Blog data array
const blogPosts = [
  {
    title: "A Variety Of Safe Taxi Services On Your Way",
    description:
      "RideMate made my trip stress-free, with a professional driver and smooth, comfortable ride experience throughout. Discover how our commitment to safety makes every journey memorable.",
    image:
      "https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/taxi-sign.webp",
    tag: "Booking",
    date: "Jan 15, 2026",
    readTime: "5 min read",
  },
  {
    title: "How To Get Discount With Your Mobile App",
    description:
      "Booking is simple, the cab arrived quickly, and the service felt safe, reliable, and affordable. Learn the best tips and tricks to save money on every ride you take.",
    image:
      "https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/taxi-african-woman-using-phone-on-back-seat.webp",
    tag: "Discount",
    date: "Jan 12, 2026",
    readTime: "4 min read",
  },
  {
    title: "10 Tips to Catch a Car or Bike in Your City Easily",
    description:
      "You love how convenient RideMate is—fast rides, friendly drivers, and excellent support every single time. Master the art of finding rides quickly with these proven strategies.",
    image:
      "https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/calling-a-taxi-with-phone.webp",
    tag: "Services",
    date: "Jan 10, 2026",
    readTime: "6 min read",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 my-12 sm:my-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Our News
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-tight">
            Blog &{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              Articles.
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            Stay updated with the latest news, tips, and insights from the world of ride-sharing and transportation.
          </p>
        </div>

        {/* Show All Button */}
        <button className="group/btn relative bg-gray-900 dark:bg-white text-primary dark:text-black px-6 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl overflow-hidden">
          <span className="relative z-10 flex items-center gap-2">
            Show All News
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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