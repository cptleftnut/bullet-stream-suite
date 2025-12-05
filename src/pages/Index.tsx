import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Zap, LayoutDashboard, LogOut } from "lucide-react";
import { categoryFeatures } from "@/data/categoryFeatures";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

const Index = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const categories = Object.entries(categoryFeatures).map(([id, data]) => ({
    id,
    ...data,
    featureCount: data.features.length
  }));

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex justify-end gap-3 mb-4">
            {user ? (
              <>
                <Button onClick={() => navigate("/dashboard")} variant="outline">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button onClick={handleLogout} variant="ghost">
                  <LogOut className="w-4 h-4 mr-2" />
                  Log ud
                </Button>
              </>
            ) : (
              <Button onClick={() => navigate("/auth")}>
                Login
              </Button>
            )}
          </div>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Code Generation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Roblox Game Systems
              <span className="block text-primary mt-2">AI Code Generator</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {user 
                ? "Generate production-ready Roblox game systems in seconds using AI. Choose your game genre and get complete, functional code for any feature."
                : "Login to start generating production-ready Roblox game systems in seconds using AI."
              }
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Choose Your Game Genre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.name}
              description={category.description}
              icon={category.icon}
              categoryId={category.id}
              featureCount={category.featureCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;