import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  categoryId: string;
  featureCount: number;
}

export const CategoryCard = ({ title, description, icon, categoryId, featureCount }: CategoryCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      onClick={() => navigate(`/category/${categoryId}`)}
      className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-8 space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-4 rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
          <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-muted">
            {featureCount} Tools
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed min-h-[40px]">{description}</p>
        </div>

        <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
          <span>Explore Tools</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Card>
  );
};