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
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:animate-float">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-foreground/80">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};