import { Card } from "@/components/ui/card";
import { Receipt, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BillUpload from "@/components/BillUpload";
import Navigation from "@/components/Navigation";

const BillsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/dashboard">
            <Button variant="ghost" className="mb-4 hover:bg-muted">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Bill Management
          </h1>
          <p className="text-muted-foreground">
            Upload, organize, and manage all your bills and receipts
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 border-border/50 gradient-card shadow-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 shadow-glow">
                <Receipt className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold">Upload Bills</h2>
            </div>
            <BillUpload />
          </Card>

          {/* Tips Section */}
          <Card className="mt-6 p-6 border-border/50 gradient-card shadow-glow">
            <h3 className="font-semibold mb-3">💡 Tips for Managing Bills</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Upload bills immediately after receiving them to stay organized</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Use descriptive file names for easy searching later</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Enable MongoDB to store bills securely in the MongoDB</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Keep digital copies for warranty and tax purposes</span>
              </li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BillsPage;
