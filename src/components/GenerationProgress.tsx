import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export const GenerationProgress = () => {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="p-8 border-border bg-card max-w-md w-full text-center space-y-4">
        <div className="flex justify-center">
          <div className="relative">
            <Loader2 className="w-16 h-16 text-primary animate-spin" />
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-foreground">Generating Your Feature</h3>
        <p className="text-sm text-muted-foreground">
          AI is crafting production-ready Roblox code...
        </p>
        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-accent animate-[shimmer_2s_ease-in-out_infinite]" 
               style={{ width: '60%' }} />
        </div>
      </Card>
    </div>
  );
};