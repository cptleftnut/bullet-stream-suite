import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FeatureCard } from "@/components/FeatureCard";
import { CodePreview } from "@/components/CodePreview";
import { GenerationProgress } from "@/components/GenerationProgress";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { categoryFeatures } from "@/data/categoryFeatures";

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");
  const [customization, setCustomization] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentFeatureType, setCurrentFeatureType] = useState("");

  const categoryData = categoryFeatures[category as keyof typeof categoryFeatures];

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Category Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const handleGenerate = async (featureType: string, customDesc?: string) => {
    setIsGenerating(true);
    setIsDialogOpen(false);
    
    try {
      const feature = categoryData.features.find(f => f.type === featureType);
      const { data, error } = await supabase.functions.invoke('generate-roblox-code', {
        body: { 
          featureType: `${categoryData.name} - ${featureType}`,
          description: feature?.description || "",
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
      {/* Header */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 py-8 relative">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-primary/10 text-primary">
              {categoryData.icon}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">{categoryData.name}</h1>
              <p className="text-muted-foreground mt-2">{categoryData.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.features.map((feature) => (
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

export default CategoryPage;