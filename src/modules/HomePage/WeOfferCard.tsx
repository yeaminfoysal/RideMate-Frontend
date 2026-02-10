import { cn } from "@/lib/utils";

type WeOfferCardProps = {
    title: string;
    desc: string;
    bgMain: string;
    textClr: string;
    bgIcon: string;
    mainIcon: string;
    icon1: string;
    icon2: string;
    icon3?: string;
    icon4?: string;
    icon1Text?: string;
    icon2Text?: string;
};

export default function WeOfferCard({
    title,
    desc,
    bgMain,
    textClr,
    bgIcon,
    mainIcon,
    icon1,
    icon2,
    icon3,
    icon4,
    icon1Text,
    icon2Text,
}: WeOfferCardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden p-6 sm:p-7 md:p-8 lg:p-9 rounded-3xl shadow-2xl transition-all duration-700 w-full max-w-[340px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[440px] backdrop-blur-md",
                bgMain,
                textClr,
                "hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]",
                "hover:rotate-[0.5deg]" // Subtle 3D tilt effect
            )}
        >
            {/* Animated Glowing Border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-yellow-500 to-primary opacity-30 blur-md animate-gradient-xy" />
            </div>

            {/* Dynamic Background Effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-0 right-0 w-40 sm:w-48 h-40 sm:h-48 bg-white/10 rounded-full blur-3xl transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-black/10 rounded-full blur-2xl transform -translate-x-12 translate-y-12 group-hover:-translate-x-8 group-hover:translate-y-8 transition-transform duration-700" />
            </div>

            {/* Corner Badge - NEW */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse" />
                    <div className="relative px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/90 to-yellow-500/90 backdrop-blur-sm">
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">Premium</span>
                    </div>
                </div>
            </div>

            {/* Decorative Corner Element - Enhanced */}
            <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-white/30 to-transparent rounded-bl-[120px] opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

            <div className="relative z-10">
                {/* Header Section */}
                <div className="flex items-start gap-4 sm:gap-5 mb-6 sm:mb-7">
                    <div
                        className={cn(
                            "relative flex-shrink-0 p-4 sm:p-5 rounded-2xl transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-700 shadow-xl",
                            bgIcon
                        )}
                    >
                        {/* Icon Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <img
                            className="relative w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 object-contain filter drop-shadow-2xl group-hover:drop-shadow-[0_0_15px_rgba(253,224,71,0.5)] transition-all duration-500"
                            src={mainIcon}
                            alt={title}
                        />
                    </div>

                    <div className="flex-1 pt-1 sm:pt-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 sm:mb-2.5 group-hover:tracking-wide transition-all duration-500 leading-tight">
                            {title}
                        </h3>
                        <p className="text-xs md:text-sm opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                            {desc}
                        </p>
                    </div>
                </div>

                {/* Animated Divider - Enhanced */}
                <div className="relative h-[2px] my-6 sm:my-7 overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-25" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-50 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>

                {/* Features Grid - Enhanced */}
                <div className={`grid ${icon1Text ? "grid-cols-2" : "grid-cols-4"} gap-3 sm:gap-3.5 md:gap-4`}>
                    {/* Feature 1 */}
                    {(icon1Text || icon1) && (
                        <div className="relative flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group/item hover:bg-white/15 hover:border-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-1 overflow-hidden">
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-yellow-500/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 blur-sm" />

                            <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:rotate-12 group-hover/item:bg-white/20 transition-all duration-500 shadow-lg">
                                <img
                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                                    src={icon1}
                                    alt={icon1Text || "Feature 1"}
                                />
                            </div>
                            {icon1Text && (
                                <p className="relative text-xs sm:text-sm font-bold opacity-90 group-hover/item:opacity-100 transition-opacity">
                                    {icon1Text}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Feature 2 */}
                    {(icon2Text || icon2) && (
                        <div className="relative flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group/item hover:bg-white/15 hover:border-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-1 overflow-hidden">
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-primary/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 blur-sm" />

                            <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:rotate-12 group-hover/item:bg-white/20 transition-all duration-500 shadow-lg">
                                <img
                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                                    src={icon2}
                                    alt={icon2Text || "Feature 2"}
                                />
                            </div>
                            {icon2Text && (
                                <p className="relative text-xs sm:text-sm font-bold opacity-90 group-hover/item:opacity-100 transition-opacity">
                                    {icon2Text}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Feature 3 */}
                    {icon3 && (
                        <div className="relative flex items-center justify-center p-3 sm:p-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group/item hover:bg-white/15 hover:border-white/20 transition-all duration-500 hover:scale-125 hover:-translate-y-1 overflow-hidden">
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 blur-sm" />

                            <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:rotate-12 group-hover/item:bg-white/20 transition-all duration-500 shadow-lg">
                                <img
                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                                    src={icon3}
                                    alt="Feature 3"
                                />
                            </div>
                        </div>
                    )}

                    {/* Feature 4 */}
                    {icon4 && (
                        <div className="relative flex items-center justify-center p-3 sm:p-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group/item hover:bg-white/15 hover:border-white/20 transition-all duration-500 hover:scale-125 hover:-translate-y-1 overflow-hidden">
                            <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 blur-sm" />

                            <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:rotate-12 group-hover/item:bg-white/20 transition-all duration-500 shadow-lg">
                                <img
                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                                    src={icon4}
                                    alt="Feature 4"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Accent Line - Enhanced */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full" />

            {/* Shine Effect - Enhanced */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1500 ease-in-out" />
            </div>
        </div>
    );
}
