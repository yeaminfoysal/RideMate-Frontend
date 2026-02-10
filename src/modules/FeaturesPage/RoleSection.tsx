import type { LucideIcon } from "lucide-react";
import { FeatureCard } from "./FeaturesCard";

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
}

interface RoleSectionProps {
    title: string;
    description: string;
    features: Feature[];
    imageAlt: string;
    images: string[];
}

export const RoleSection = ({
    title,
    description,
    features,
    images,
    imageAlt,
}: RoleSectionProps) => {

    const featureGroups = [];
    for (let i = 0; i < features.length; i += 2) {
        featureGroups.push(features.slice(i, i + 2));
    }

    return (
        <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute top-32 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-32 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />

                {/* Floating Particles */}
                <div className="absolute top-20 left-[15%] w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
                <div className="absolute top-40 right-[20%] w-3 h-3 bg-yellow-500/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
                <div className="absolute bottom-32 left-[25%] w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "2.5s" }} />
                <div className="absolute bottom-48 right-[30%] w-3 h-3 bg-yellow-400/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                        backgroundSize: `50px 50px`,
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Enhanced Section heading */}
                <div className="text-center mb-12 sm:mb-14 md:mb-20 animate-fade-in">
                    {/* Badge with Animation */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <p className="text-primary text-xs sm:text-sm font-bold tracking-wide uppercase">
                            Features
                        </p>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
                    </div>

                    {/* Title with Gradient Animation */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
                        <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent inline-block">
                            {title}
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed">
                        {description}
                    </p>

                    {/* Decorative Line */}
                    <div className="relative mt-6 w-24 h-1 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full blur-sm animate-pulse" />
                    </div>
                </div>

                {/* Feature Groups (2 features + 1 image) */}
                {featureGroups.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20`}
                    >
                        {/* Alternating layout */}
                        {groupIndex % 2 === 0 ? (
                            <>
                                {/* Image left on desktop, top on mobile */}
                                <div className="relative group animate-slide-up order-1">
                                    {/* Decorative background shape */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-yellow-500/5 rounded-2xl rotate-2 group-hover:rotate-3 transition-transform duration-500" />

                                    <div className="relative">
                                        <img
                                            src={images[groupIndex % images.length]}
                                            alt={imageAlt}
                                            className="relative w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl group-hover:shadow-primary/20 transition-all duration-500"
                                        />

                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>

                                {/* Features right on desktop, bottom on mobile */}
                                <div className="order-2">
                                    <div className="grid gap-4 sm:gap-5 md:gap-6">
                                        {group.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="animate-fade-in"
                                                style={{
                                                    animationDelay: `${(groupIndex * 2 + i) * 100}ms`,
                                                }}
                                            >
                                                <FeatureCard {...feature} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Features left on desktop, bottom on mobile */}
                                <div className="order-2 lg:order-1">
                                    <div className="grid gap-4 sm:gap-5 md:gap-6">
                                        {group.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="animate-fade-in"
                                                style={{
                                                    animationDelay: `${(groupIndex * 2 + i) * 100}ms`,
                                                }}
                                            >
                                                <FeatureCard {...feature} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Image right on desktop, top on mobile */}
                                <div className="relative group animate-slide-up order-1 lg:order-2">
                                    {/* Decorative background shape */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-primary/10 rounded-2xl -rotate-2 group-hover:-rotate-3 transition-transform duration-500" />

                                    <div className="relative">
                                        <img
                                            src={images[groupIndex % images.length]}
                                            alt={imageAlt}
                                            className="relative w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl group-hover:shadow-primary/20 transition-all duration-500"
                                        />

                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
};
