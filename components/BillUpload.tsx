import { useState } from "react";
import { Upload, FileText, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const BillUpload = () => {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return toast({ title: "No file selected" });

    const formData = new FormData();
    formData.append("billImage", selectedFile);

    try {
      const res = await fetch("http://localhost:5000/api/expenses", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      toast({ title: "Upload successful!", description: selectedFile.name });
      setSelectedFile(null);
      console.log("Uploaded expense:", data);
    } catch (err: any) {
      toast({ title: "Error", description: err.message });
    }
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center hover:border-primary/50 transition-smooth cursor-pointer group">
        <label className="flex flex-col items-center gap-3 cursor-pointer">
          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
            <Upload className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-medium">Upload Bill</p>
            <p className="text-sm text-muted-foreground">Click to select files</p>
          </div>
          <input
            type="file"
            accept="image/*,application/pdf"
            className="hidden"
            onChange={handleFileSelect}
          />
        </label>
      </div>

      {selectedFile && (
        <Button onClick={handleUpload} className="w-full">
          Upload {selectedFile.name}
        </Button>
      )}

      <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
        <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
        <p className="text-xs text-muted-foreground">
          Files will be uploaded to MongoDB backend securely.
        </p>
      </div>
    </div>
  );
};

export default BillUpload;
