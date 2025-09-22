import React from "react";

// Card props interface
interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  tag: string;
}

// Reusable Card Component
const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, tag }) => {
  return (
    <div className="bg-background dark:bg-[#131313] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition w-full">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 sm:h-64 md:h-56 object-cover rounded-t-2xl"
        />
        <span className="absolute top-3 left-3 bg-yellow-500 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-md">
          {tag}
        </span>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-bold">{title}</h3>
        <p className="mt-2 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  );
};

// Blog data array
const blogPosts = [
  {
    title: "A Variety Of Safe Taxi Services On Your Way",
    description:
      "Lorem ipsum dolor amet, elit aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et...",
    image:
      "https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/taxi-sign.webp",
    tag: "Booking",
  },
  {
    title: "How Go Get Discount With Your Mobile App",
    description:
      "Lorem ipsum dolor amet, elit aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et...",
    image:
      "https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/taxi-african-woman-using-phone-on-back-seat.webp",
    tag: "Discount",
  },
  {
    title: "10 Tips to Catch a Taxi in Your City Easily",
    description:
      "Lorem ipsum dolor amet, elit aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et...",
    image:
      "https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/calling-a-taxi-with-phone.webp",
    tag: "Services",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 my-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10">
        <div>
          <p className="text-primary font-medium text-sm sm:text-base">Our News</p>
          <h2 className="text-2xl sm:text-3xl md:text-[50px] font-semibold mt-1 sm:mt-2">
            Blog & <span className="text-primary">Articles.</span>
          </h2>
        </div>
        <button className="mt-4 sm:mt-0 bg-gray-900 text-primary px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base">
          Show All News
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            description={post.description}
            image={post.image}
            tag={post.tag}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
