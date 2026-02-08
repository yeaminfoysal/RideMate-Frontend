import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const FeatureCard = ({ icon: Icon, title, description, features }: FeatureCardProps) => {
  return (
    <Card className="group bg-feature-gradient shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border-primary/10 hover:border-primary/30">
      <CardHeader className="text-center pb-2 sm:pb-4 p-4 sm:p-6">
        <div className="mx-auto mb-3 sm:mb-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center group-hover:animate-float">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-lg sm:text-xl font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-sm sm:text-base text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-foreground/80">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};