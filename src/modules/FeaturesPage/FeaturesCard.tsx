import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const FeatureCard = ({ icon: Icon, title, description, features }: FeatureCardProps) => {
  return (
    <Card className="group relative bg-gradient-to-br from-background via-background to-background/50 dark:from-[#131313] dark:via-[#1a1a1a] dark:to-[#131313] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-primary/10 hover:border-primary/30 backdrop-blur-sm overflow-hidden">
      {/* Animated Glowing Border */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-yellow-500 to-primary opacity-20 blur-md animate-gradient-xy" />
      </div>

      {/* Corner Badge - Premium */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse" />
          <div className="relative px-2.5 py-1 rounded-full bg-gradient-to-r from-primary/90 to-yellow-500/90 backdrop-blur-sm">
            <span className="text-[9px] font-bold text-black uppercase tracking-wider">Featured</span>
          </div>
        </div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <CardHeader className="relative text-center pb-2 sm:pb-3 p-3 sm:p-4">
        {/* Enhanced Icon Container */}
        <div className="relative mx-auto mb-2 sm:mb-3 w-10 h-10 sm:w-14 sm:h-14">
          {/* Glow effect behind icon */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-yellow-500 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />

          {/* Icon wrapper */}
          <div className="relative w-full h-full bg-gradient-to-br from-primary via-yellow-500 to-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg">
            <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-black relative z-10" />
          </div>

          {/* Rotating ring on hover */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
        </div>

        <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1.5">
          {title}
        </CardTitle>
        <CardDescription className="text-sm sm:text-base text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative p-3 sm:p-4 pt-0">
        {/* Decorative Divider */}
        <div className="relative h-px mb-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        <ul className="space-y-2 sm:space-y-2.5">
          {features.map((feature, index) => (
            <li
              key={index}
              className="group/item flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-foreground/80 hover:text-foreground transition-colors duration-300"
            >
              {/* Enhanced bullet point */}
              <div className="relative mt-1.5 sm:mt-2 flex-shrink-0">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                <div className="relative w-3.5 h-3.5 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center group-hover/item:scale-105 transition-transform duration-300">
                  <Check className="w-2 h-2 text-black" strokeWidth={3} />
                </div>
              </div>
              <span className="group-hover/item:translate-x-1 transition-transform duration-300">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      {/* Bottom Accent Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </Card>
  );
};
