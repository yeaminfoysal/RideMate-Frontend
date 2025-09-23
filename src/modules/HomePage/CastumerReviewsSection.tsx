import React from "react";

interface Review {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Devina Mueller",
    role: "Entrepreneur",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "RideMate made my trip stress-free, with a professional driver and smooth, comfortable ride experience throughout.",
  },
  {
    id: 2,
    name: "Dave Beech",
    role: "Manager",
    image:
      "https://randomuser.me/api/portraits/men/46.jpg",
    review:
      "Booking was simple, the cab arrived quickly, and the service felt safe, reliable, and affordable.",
  },
  {
    id: 3,
    name: "Xavier Mcfarla",
    role: "CEO Brand",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "I love how convenient RideMate is—fast rides, friendly drivers, and excellent support every single time.",
  },
];

const CustomerReviews: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 pb-80 lg:mb-46"
      style={{
        backgroundImage:
          "url('https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/glowing-london-taxi-light.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
        <p className="text-yellow-400 font-medium">Customers Feedback</p>
        <h2 className="text-[50px] font-semibold mt-2">
          Our Customer <span className="text-yellow-400">Reviews.</span>
        </h2>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Hear from our happy riders and discover why people trust RideMate for safe and reliable journeys.
        </p>
      </div>

      {/* Cards */}
      <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-full z-20 max-w-6xl mx-auto mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center px-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-background dark:bg-[#131313] rounded-2xl shadow-lg p-6 md:p-8 flex-1 transform translate-y-20"
          >
            <div className="flex items-center justify-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-yellow-500 text-5xl leading-none text-center my-4">
              &quot;
            </p>
            <p className="text-sm  text-center">{review.review}</p>
            <div className="mt-6 text-center">
              <h4 className="font-bold ">{review.name}</h4>
              <p className="text-yellow-500 text-sm">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
