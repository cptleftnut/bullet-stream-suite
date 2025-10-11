import { useState } from "react";
import { FeatureCard } from "@/components/FeatureCard";
import { CodePreview } from "@/components/CodePreview";
import { GenerationProgress } from "@/components/GenerationProgress";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Sprout, Users, Coins, Sparkles, Package, Settings, Zap } from "lucide-react";

const Index = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");
  const [customization, setCustomization] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentFeatureType, setCurrentFeatureType] = useState("");

  const features = [
    {
      title: "Planting System",
      description: "Complete farming mechanics with seed planting, growth timers, and harvest rewards",
      icon: <Sprout className="w-6 h-6" />,
      category: "Farming",
      type: "Planting System"
    },
    {
      title: "Social Gardens",
      description: "Friend visiting system with helping mechanics and shared effort rewards",
      icon: <Users className="w-6 h-6" />,
      category: "Social",
      type: "Social Gardens"
    },
    {
      title: "Garden Shop",
      description: "In-game marketplace with seeds, tools, and decorations",
      icon: <Package className="w-6 h-6" />,
      category: "Economy",
      type: "Garden Shop"
    },
    {
      title: "Mutation System",
      description: "Rare plant mutations when specific crops are planted adjacent",
      icon: <Sparkles className="w-6 h-6" />,
      category: "Farming",
      type: "Mutation System"
    },
    {
      title: "Currency System",
      description: "Complete economy with coins, transactions, and rewards",
      icon: <Coins className="w-6 h-6" />,
      category: "Economy",
      type: "Currency System"
    },
    {
      title: "Tool Mastery",
      description: "Tool durability, upgrades, and quality tiers system",
      icon: <Settings className="w-6 h-6" />,
      category: "Progression",
      type: "Tool Mastery"
    }
  ];

  const handleGenerate = async (featureType: string, customDesc?: string) => {
    setIsGenerating(true);
    setIsDialogOpen(false);
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-roblox-code', {
        body: { 
          featureType,
          description: features.find(f => f.type === featureType)?.description || "",
          customization: customDesc || ""
        }
      });

      if (error) throw error;

      if (data?.error) {
        toast.error(data.error);
        setIsGenerating(false);
        return;
      }

      setGeneratedCode(data.code);
      setSelectedFeature(featureType);
      toast.success("Code generated successfully!");
    } catch (error) {
      console.error('Generation error:', error);
      toast.error("Failed to generate code. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const openCustomDialog = (featureType: string) => {
    setCurrentFeatureType(featureType);
    setCustomization("");
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Code Generation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Seedling Stories
              <span className="block text-primary mt-2">Feature Generator</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Generate production-ready Roblox game systems in seconds using AI. 
              Complete farming mechanics, social features, and economy systems for your gardening simulator.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.type}
              {...feature}
              onGenerate={() => openCustomDialog(feature.type)}
            />
          ))}
        </div>
      </div>

      {/* Customization Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="border-border bg-card">
          <DialogHeader>
            <DialogTitle className="text-foreground">Customize Your Feature</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="Add any specific requirements or customizations (optional)..."
              value={customization}
              onChange={(e) => setCustomization(e.target.value)}
              className="min-h-[120px] bg-muted/50 border-border"
            />
            <Button 
              onClick={() => handleGenerate(currentFeatureType, customization)}
              className="w-full bg-gradient-to-r from-primary to-accent"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Generate Code
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Loading State */}
      {isGenerating && <GenerationProgress />}

      {/* Code Preview */}
      {generatedCode && !isGenerating && (
        <CodePreview
          code={generatedCode}
          featureType={selectedFeature}
          onClose={() => setGeneratedCode("")}
        />
      )}
    </div>
  );
};

export default Index;