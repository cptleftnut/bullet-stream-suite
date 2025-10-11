import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Download, X } from "lucide-react";
import { toast } from "sonner";

interface CodePreviewProps {
  code: string;
  featureType: string;
  onClose: () => void;
}

export const CodePreview = ({ code, featureType, onClose }: CodePreviewProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${featureType.toLowerCase().replace(/\s+/g, '-')}.lua`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Code downloaded!");
  };

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden border-border">
        <div className="flex items-center justify-between p-4 border-b border-border bg-card">
          <h2 className="text-xl font-semibold text-foreground">Generated Code: {featureType}</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={handleCopy}>
              <Copy className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleDownload}>
              <Download className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="overflow-auto max-h-[calc(90vh-80px)] p-6 bg-muted/30">
          <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
            {code}
          </pre>
        </div>
      </Card>
    </div>
  );
};