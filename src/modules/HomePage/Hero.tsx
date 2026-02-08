import { ArrowRight, Star, Users, Car, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/her1.webp";

interface Hero1Props {
    badge?: string;
    heading: string;
    description: string;
    buttons: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
}

const Hero1 = () => {
    const props: Hero1Props = {
        badge: "✨ Your reliable ridemate",
        heading: "RideMate – Your Smart Ride Companion",
        description:
            "Book rides, manage trips, and drive with ease. A seamless ride-sharing platform built for Riders, Drivers, and Admins.",
        buttons: {
            primary: {
                text: "Get Started Now",
                url: "/signup",
            },
            secondary: {
                text: "Learn More",
                url: "/about",
            },
        },
    };

    const stats = [
        { icon: Users, value: "500K+", label: "Active Users" },
        { icon: Car, value: "50K+", label: "Drivers" },
        { icon: Star, value: "4.9", label: "Rating" },
    ];

    return (
        <section className="relative py-28 sm:py-28 md:py-28 lg:py-28 xl:py-36 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px sm:40px 40px md:50px 50px",
                    }}
                ></div>
            </div>

            <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                    {/* Left Content */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 sm:space-y-8 animate-fade-in-up">
                        {/* Badge */}
                        {props.badge && (
                            <Badge
                                variant="outline"
                                className="group border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all duration-300 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold backdrop-blur-sm"
                            >
                                {props.badge}
                                <div className="ml-2 w-4 h-4 sm:w-5 sm:h-5 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-colors">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-ping group-hover:bg-black" />
                                </div>
                            </Badge>
                        )}

                        {/* Heading */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                            RideMate –
                            <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent animate-gradient">
                                Your Smart Ride
                            </span>
                            Companion
                        </h1>

                        {/* Description */}
                        <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
                            {props.description}
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-4 w-full">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm sm:text-lg font-bold text-white">{stat.value}</p>
                                        <p className="text-[9px] sm:text-[10px] text-gray-400">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex w-full flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
                            {props.buttons.primary && (
                                <Button
                                    asChild
                                    size="lg"
                                    className="group w-full sm:w-auto bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-5 sm:px-8 sm:py-6 text-xs sm:text-sm rounded-lg sm:rounded-xl shadow-xl hover:shadow-primary/30 transition-all duration-300"
                                >
                                    <a href={props.buttons.primary.url} className="flex items-center justify-center gap-2">
                                        {props.buttons.primary.text}
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                </Button>
                            )}
                            {props.buttons.secondary && (
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="group w-full sm:w-auto border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-5 sm:px-8 sm:py-6 text-xs sm:text-sm rounded-lg sm:rounded-xl backdrop-blur-sm transition-all duration-300"
                                >
                                    <a href={props.buttons.secondary.url} className="flex items-center justify-center gap-2">
                                        {props.buttons.secondary.text}
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end animate-fade-in-up mt-8 lg:mt-0" style={{ animationDelay: "0.2s" }}>
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] bg-gradient-to-br from-primary/40 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white dark:bg-background rounded-xl sm:rounded-2xl shadow-2xl p-2 sm:p-4 border border-gray-100 dark:border-gray-800 animate-bounce-slow z-20">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                                    <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-muted-foreground">Safe & Secure</p>
                                    <p className="text-sm sm:text-lg font-bold text-foreground">100%</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary rounded-xl sm:rounded-2xl shadow-2xl p-2 sm:p-4 animate-bounce-slow z-20" style={{ animationDelay: "0.5s" }}>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <Star className="w-4 h-4 sm:w-6 sm:h-6 fill-black text-black" />
                                <div>
                                    <p className="text-[10px] sm:text-xs text-black/80">User Rating</p>
                                    <p className="text-sm sm:text-lg font-bold text-black">4.9/5</p>
                                </div>
                            </div>
                        </div>

                        {/* Main Image */}
                        <div className="relative z-10">
                            <img
                                src={hero1}
                                alt="RideMate App Preview"
                                className="max-h-[280px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] xl:max-h-[500px] w-auto rounded-xl sm:rounded-2xl animate-[float_3s_ease-in-out_infinite] hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Decorative Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] border-2 border-primary/20 rounded-full animate-ping-slow" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] border-2 border-primary/10 rounded-full animate-ping-slow" style={{ animationDelay: "1s" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Hero1 };