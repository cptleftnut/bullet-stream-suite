import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  onGenerate: () => void;
  ideal?: boolean;
}

export const FeatureCard = ({ title, description, icon, category, onGenerate, ideal }: FeatureCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {ideal && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-semibold text-primary-foreground shadow-lg">
          ⭐ Ideal
        </div>
      )}
      
      <div className="relative p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-muted">
            {category}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <Button 
          onClick={onGenerate}
          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Generate Code
        </Button>
      </div>
    </Card>
  );
};