import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeft, Copy, Download, Trash2, Code, Calendar, FolderOpen } from "lucide-react";
import { User, Session } from "@supabase/supabase-js";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CodeSnippet {
  id: string;
  feature_type: string;
  category: string;
  code: string;
  customization: string | null;
  created_at: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [snippets, setSnippets] = useState<CodeSnippet[]>([]);
  const [selectedSnippet, setSelectedSnippet] = useState<CodeSnippet | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      if (!session) {
        toast.error("Log venligst ind for at se dit dashboard.");
        navigate("/auth");
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);

      if (!session) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchSnippets();
    }
  }, [user]);

  const fetchSnippets = async () => {
    const { data, error } = await supabase
      .from("code_snippets")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching snippets:", error);
      toast.error("Kunne ikke hente dine snippets");
    } else {
      setSnippets(data || []);
    }
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Kode kopieret til udklipsholder!");
  };

  const handleDownload = (snippet: CodeSnippet) => {
    const blob = new Blob([snippet.code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${snippet.feature_type.toLowerCase().replace(/\s+/g, "-")}.lua`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Kode downloadet!");
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    const { error } = await supabase
      .from("code_snippets")
      .delete()
      .eq("id", deleteId);

    if (error) {
      toast.error("Kunne ikke slette snippet");
    } else {
      toast.success("Snippet slettet!");
      setSnippets(snippets.filter((s) => s.id !== deleteId));
      if (selectedSnippet?.id === deleteId) {
        setSelectedSnippet(null);
      }
    }
    setDeleteId(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("da-DK", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const categories = [...new Set(snippets.map((s) => s.category))];
  const filteredSnippets = categoryFilter === "all" 
    ? snippets 
    : snippets.filter((s) => s.category === categoryFilter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Indlæser...</p>
      </div>
    );
  }

  if (!user || !session) {
    return null;
  }

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
            Tilbage til Forsiden
          </Button>

          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-primary/10 text-primary">
              <Code className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Mit Dashboard</h1>
              <p className="text-muted-foreground mt-2">
                Se og administrer dine genererede kode-snippets
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {snippets.length === 0 ? (
          <Card className="p-12 text-center border-border bg-card">
            <FolderOpen className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Ingen snippets endnu
            </h2>
            <p className="text-muted-foreground mb-6">
              Du har ikke genereret nogen kode endnu. Vælg en kategori og begynd at generere!
            </p>
            <Button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-primary to-accent"
            >
              Udforsk Kategorier
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Snippet List */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">
                  Dine Snippets ({filteredSnippets.length})
                </h2>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Alle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {filteredSnippets.map((snippet) => (
                  <Card
                    key={snippet.id}
                    onClick={() => setSelectedSnippet(snippet)}
                    className={`p-4 cursor-pointer transition-all border-border bg-card hover:border-primary/50 ${
                      selectedSnippet?.id === snippet.id ? "border-primary ring-1 ring-primary" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-medium text-foreground">
                          {snippet.feature_type}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {snippet.category}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteId(snippet.id);
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {formatDate(snippet.created_at)}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Code Preview */}
            <div className="lg:col-span-2">
              {selectedSnippet ? (
                <Card className="border-border bg-card overflow-hidden">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">
                        {selectedSnippet.feature_type}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {selectedSnippet.category} • {formatDate(selectedSnippet.created_at)}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleCopy(selectedSnippet.code)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDownload(selectedSnippet)}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {selectedSnippet.customization && (
                    <div className="p-4 border-b border-border bg-muted/30">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Tilpasning:</span>{" "}
                        {selectedSnippet.customization}
                      </p>
                    </div>
                  )}

                  <div className="overflow-auto max-h-[500px] p-6 bg-muted/30">
                    <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
                      {selectedSnippet.code}
                    </pre>
                  </div>
                </Card>
              ) : (
                <Card className="p-12 text-center border-border bg-card h-full flex items-center justify-center">
                  <div>
                    <Code className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">
                      Vælg en snippet fra listen for at se koden
                    </p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Slet snippet?</AlertDialogTitle>
            <AlertDialogDescription>
              Er du sikker på, at du vil slette denne snippet? Denne handling kan ikke fortrydes.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuller</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Slet
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Dashboard;
