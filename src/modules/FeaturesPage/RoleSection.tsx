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
    console.log(featureGroups)

    return (
        <section className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4">
                {/* Section heading */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-6">
                        {title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                        {description}
                    </p>
                </div>

                {/* Groups (২টা feature + ১টা image) */}
                {featureGroups.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-24`}
                    >
                        {/* Alternating layout */}
                        {groupIndex % 2 === 0 ? (
                            <>
                                {/* Image left on desktop, top on mobile */}
                                <div className="animate-slide-up order-1">
                                    <img
                                        src={images[groupIndex % images.length]} // images repeat হবে
                                        alt={imageAlt}
                                        className="w-full h-auto rounded-xl sm:rounded-2xl shadow-card-hover"
                                    />
                                </div>
                                {/* Features right on desktop, bottom on mobile */}
                                <div className="order-2">
                                    <div className="grid gap-4 sm:gap-6 md:gap-8">
                                        {group.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="animate-fade-in"
                                                style={{
                                                    animationDelay: `${i * 0.1}s`,
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
                                    <div className="grid gap-4 sm:gap-6 md:gap-8">
                                        {group.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="animate-fade-in"
                                                style={{
                                                    animationDelay: `${i * 0.1}s`,
                                                }}
                                            >
                                                <FeatureCard {...feature} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Image right on desktop, top on mobile */}
                                <div className="animate-slide-up order-1 lg:order-2">
                                    <img
                                        src={images[groupIndex % images.length]}
                                        alt={imageAlt}
                                        className="w-full h-auto rounded-xl sm:rounded-2xl shadow-card-hover"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
