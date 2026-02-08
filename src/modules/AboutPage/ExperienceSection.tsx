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
            className="relative bg-fixed bg-center bg-cover py-16 sm:py-24 md:py-32"
            style={{
                backgroundImage:
                    'url("https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/lighting-taxi-sign.webp")',
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
                {/* Heading */}
                <span className="text-primary font-medium">Our Experience</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 mb-4 leading-snug">
                    We Are Experienced Since 1992 Until Now
                    <span className="text-primary">.</span>
                </h2>
                <p className="text-gray-200 max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-20 text-xs sm:text-sm md:text-base px-2">
                    With decades of trusted service since 1992, RideMate continues to deliver safe, reliable, and quality rides worldwide.
                </p>
            </div>

            {/* Stats Cards (absolute bottom) */}

            <div className="lg:absolute lg:left-1/2 bottom-0 lg:transform lg:-translate-x-1/2 lg:translate-y-1/2 w-full max-w-6xl px-4 sm:px-6 z-50">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">

                    {stats.map((item, i) => (
                        <div
                            key={i}
                            className="bg-background dark:bg-[#131313] rounded-xl sm:rounded-2xl shadow-lg py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 flex flex-col items-center border border-border"
                        >
                            <h3 className="text-2xl sm:text-3xl md:text-[44px] font-bold text-foreground">
                                {item.number}
                                <span className="text-primary">+</span>
                            </h3>
                            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-muted-foreground text-center">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
