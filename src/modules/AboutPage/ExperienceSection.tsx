import React from "react";

const ExperienceSection: React.FC = () => {
    const stats = [
        { number: "167", label: "Our Taxi Unit" },
        { number: "2820", label: "Happy Customer" },
        { number: "25", label: "Years of Experience" },
        { number: "1285", label: "App Downloads" },
    ];

    return (
        <section
            className="relative bg-fixed bg-center bg-cover py-32"
            style={{
                backgroundImage:
                    'url("https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/lighting-taxi-sign.webp")',
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                {/* Heading */}
                <span className="text-primary font-medium">Our Experience</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2 mb-4 leading-snug">
                    We Are Experienced Since 1992 Until Now
                    <span className="text-primary">.</span>
                </h2>
                <p className="text-gray-200 max-w-2xl mx-auto mb-12 sm:mb-20 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero
                    condimentum metus.
                </p>
            </div>

            {/* Stats Cards (absolute bottom) */}

            <div className="lg:absolute lg:left-1/2 bottom-0 lg:transform lg:-translate-x-1/2 lg:translate-y-1/2 w-full max-w-6xl px-6 z-50">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {stats.map((item, i) => (
                        <div
                            key={i}
                            className="bg-background dark:bg-[#131313] rounded-2xl shadow-lg py-10 px-10 flex flex-col items-center"
                        >
                            <h3 className="text-[44px] font-bold">
                                {item.number}
                                <span className="text-primary">+</span>
                            </h3>
                            <p className="mt-3 text-gray-500 ">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
