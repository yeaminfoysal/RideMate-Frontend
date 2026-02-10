import React from "react";

const ExperienceSection: React.FC = () => {
    const stats = [
        { number: "500", label: "Active Drivers" },
        { number: "15K", label: "Total Rides Completed" },
        { number: "3", label: "User Roles (Rider, Driver, Admin)" },
        { number: "98", label: "User Satisfaction Rate" },
    ];

    return (
        <section
            className="relative bg-fixed bg-center bg-cover py-20 sm:py-28 md:py-36 overflow-hidden"
            style={{
                backgroundImage:
                    'url("https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/lighting-taxi-sign.webp")',
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-[10%] w-2 h-2 bg-white/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
                <div className="absolute top-40 right-[15%] w-3 h-3 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-yellow-500/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
                <div className="absolute bottom-48 right-[25%] w-3 h-3 bg-white/40 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
                {/* Enhanced Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-primary text-sm font-bold tracking-wide uppercase">Our Platform</span>
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
                </div>

                {/* Gradient Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mt-2 mb-4 leading-snug">
                    <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent inline-block">
                        Modern MERN Stack Ride-Sharing Platform
                    </span>
                    <span className="text-primary">.</span>
                </h2>

                <p className="text-gray-200 max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-24 text-xs sm:text-sm md:text-base px-2 leading-relaxed">
                    Built with cutting-edge technology—React, Node.js, Express, MongoDB, and TypeScript—RideMate delivers real-time tracking, secure payments, and role-based features for an exceptional ride-sharing experience.
                </p>

                {/* Decorative Line */}
                <div className="relative w-32 h-1 mx-auto mb-12 sm:mb-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full blur-sm animate-pulse" />
                </div>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="lg:absolute lg:left-1/2 bottom-0 lg:transform lg:-translate-x-1/2 lg:translate-y-1/2 w-full max-w-6xl px-4 sm:px-6 z-[100]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {stats.map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-background dark:bg-[#131313] rounded-xl sm:rounded-2xl shadow-2xl py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 flex flex-col items-center border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-in"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            {/* Glowing Border */}
                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-yellow-500 to-primary opacity-20 blur-md animate-gradient-xy" />
                            </div>

                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <h3 className="relative text-2xl sm:text-3xl md:text-[44px] font-black text-foreground group-hover:scale-110 transition-transform duration-300">
                                {item.number}
                                <span className="text-primary">+</span>
                            </h3>
                            <p className="relative mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-muted-foreground group-hover:text-foreground text-center transition-colors duration-300">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
