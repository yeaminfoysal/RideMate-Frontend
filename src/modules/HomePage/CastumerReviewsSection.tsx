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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
  },
  {
    id: 2,
    name: "Dave Beech",
    role: "Manager",
    image:
      "https://randomuser.me/api/portraits/men/46.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
  },
  {
    id: 3,
    name: "Xavier Mcfarla",
    role: "CEO Brand",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
  },
];

const CustomerReviews: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 pb-80 mb-26"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero
          condimentum metus.
        </p>
      </div>

      {/* Cards */}
      <div className="absolute top-36 left-40 z-20 max-w-6xl mx-auto mt-16 flex flex-col md:flex-row gap-6 justify-center px-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white text-gray-700 rounded-2xl shadow-lg p-6 md:p-8 flex-1 transform translate-y-20"
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
            <p className="text-sm text-gray-600 text-center">{review.review}</p>
            <div className="mt-6 text-center">
              <h4 className="font-bold text-gray-900">{review.name}</h4>
              <p className="text-yellow-500 text-sm">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
