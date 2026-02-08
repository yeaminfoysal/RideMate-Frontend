import bgImage from "@/assets/steel-look-podium-product-display.webp";
import phoneImage from "@/assets/mobile-apps.webp";
import { Smartphone, Download, Star, Shield, Zap } from "lucide-react";

export default function DownloadApp() {
    const features = [
        { icon: Shield, text: "Secure & Safe" },
        { icon: Zap, text: "Fast Booking" },
        { icon: Star, text: "Top Rated" },
    ];

    return (
        <section
            className="relative py-16 px-6 md:px-12 bg-cover bg-center lg:min-h-[500px] my-16 sm:my-20 overflow-hidden"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            {/* Enhanced Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>

            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Phone Image Container */}
                <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                    <div className="relative group">
                        {/* Glow Effect Behind Phone */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent blur-3xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>

                        {/* Floating Elements */}
                        <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: "3s" }}></div>
                        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}></div>

                        {/* Phone Image */}
                        <div className="relative">
                            <img
                                src={phoneImage}
                                alt="RideMate Mobile App Interface"
                                className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[800px] h-auto drop-shadow-2xl transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-700 "
                            />
                        </div>

                        {/* Download Count Badge */}
                        <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 border border-gray-100 dark:border-gray-800 animate-fade-in">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                                    <Download className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-foreground">100K+</p>
                                    <p className="text-xs text-muted-foreground">Downloads</p>
                                </div>
                            </div>
                        </div>

                        {/* Rating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl shadow-2xl p-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 fill-black text-black" />
                                <div>
                                    <p className="text-lg font-bold text-black">4.9</p>
                                    <p className="text-[10px] text-black/80">Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="text-white order-1 lg:order-2 space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary px-4 py-2 rounded-full font-semibold text-sm">
                        <Smartphone className="w-4 h-4" />
                        Download RideMate App
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Download RideMate App <br />
                        From Your Gadget
                        <span className="text-primary">.</span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                        Get the RideMate app on your device and enjoy fast, safe, and hassle-free rides anytime, anywhere.
                    </p>

                    {/* Features List */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <feature.icon className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium">{feature.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Store Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#"
                            className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img
                                src="https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/app-store-apple.webp"
                                alt="Download on the App Store"
                                className="h-12 sm:h-14 relative z-10"
                            />
                        </a>
                        <a
                            href="#"
                            className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img
                                src="https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/google-play-badge.webp"
                                alt="Get it on Google Play"
                                className="h-12 sm:h-14 relative z-10"
                            />
                        </a>
                    </div>

                    {/* Additional Info */}
                    <div className="flex items-center gap-6 pt-4 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>Available Now</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <span>Free Download</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}