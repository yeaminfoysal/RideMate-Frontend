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
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Section heading */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
                        {title}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* Groups (২টা feature + ১টা image) */}
                {featureGroups.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className={`grid lg:grid-cols-2 gap-16 items-center mb-24`}
                    >
                        {/* Alternating layout */}
                        {groupIndex % 2 === 0 ? (
                            <>
                                {/* Image left */}
                                <div className="animate-slide-up">
                                    <img
                                        src={images[groupIndex % images.length]} // images repeat হবে
                                        alt={imageAlt}
                                        className="w-full h-auto rounded-2xl shadow-card-hover"
                                    />
                                </div>
                                {/* Features right */}
                                <div>
                                    <div className="grid gap-8">
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
                                {/* Features left */}
                                <div>
                                    <div className="grid gap-8">
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
                                {/* Image right */}
                                <div className="animate-slide-up">
                                    <img
                                        src={images[groupIndex % images.length]}
                                        alt={imageAlt}
                                        className="w-full h-auto rounded-2xl shadow-card-hover"
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
