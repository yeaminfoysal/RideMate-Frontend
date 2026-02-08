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
                "group relative overflow-hidden p-6 sm:p-7 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 w-full sm:w-[300px] md:w-[320px] lg:w-[420px] backdrop-blur-sm",
                bgMain,
                textClr,
                "hover:-translate-y-2 hover:scale-[1.02]"
            )}
        >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl transform -translate-x-10 translate-y-10" />
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-bl-[100px] opacity-50" />

            <div className="relative z-10">
                {/* Header Section */}
                <div className="flex items-start gap-4 mb-6">
                    <div
                        className={cn(
                            "flex-shrink-0 p-4 rounded-2xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg",
                            bgIcon
                        )}
                    >
                        <img
                            className="w-10 sm:w-12 h-10 sm:h-12 object-contain filter drop-shadow-md"
                            src={mainIcon}
                            alt={title}
                        />
                    </div>

                    <div className="flex-1 pt-1">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:tracking-wide transition-all duration-300">
                            {title}
                        </h3>
                        <p className="text-sm sm:text-base opacity-90 leading-relaxed">
                            {desc}
                        </p>
                    </div>
                </div>

                {/* Animated Divider */}
                <div className="relative h-px my-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-40 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Features Grid */}
                <div className={`grid ${icon1Text ? "grid-cols-2" : "grid-cols-4"} gap-3 sm:gap-4`}>
                    {/* Feature 1 */}
                    {(icon1Text || icon1) && (
                        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 backdrop-blur-sm group/item hover:bg-white/10 transition-all duration-300 hover:scale-105">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:rotate-12 transition-transform duration-300">
                                <img
                                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                                    src={icon1}
                                    alt={icon1Text || "Feature 1"}
                                />
                            </div>
                            {icon1Text && (
                                <p className="text-xs sm:text-sm font-semibold">
                                    {icon1Text}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Feature 2 */}
                    {(icon2Text || icon2) && (
                        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 backdrop-blur-sm group/item hover:bg-white/10 transition-all duration-300 hover:scale-105">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:rotate-12 transition-transform duration-300">
                                <img
                                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                                    src={icon2}
                                    alt={icon2Text || "Feature 2"}
                                />
                            </div>
                            {icon2Text && (
                                <p className="text-xs sm:text-sm font-semibold">
                                    {icon2Text}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Feature 3 */}
                    {icon3 && (
                        <div className="flex items-center justify-center p-3 rounded-xl bg-white/5 backdrop-blur-sm group/item hover:bg-white/10 transition-all duration-300 hover:scale-110">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:rotate-12 transition-transform duration-300">
                                <img
                                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                                    src={icon3}
                                    alt="Feature 3"
                                />
                            </div>
                        </div>
                    )}

                    {/* Feature 4 */}
                    {icon4 && (
                        <div className="flex items-center justify-center p-3 rounded-xl bg-white/5 backdrop-blur-sm group/item hover:bg-white/10 transition-all duration-300 hover:scale-110">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:rotate-12 transition-transform duration-300">
                                <img
                                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                                    src={icon4}
                                    alt="Feature 4"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000" />
            </div>
        </div>
    );
}