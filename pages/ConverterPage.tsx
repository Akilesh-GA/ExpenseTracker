import { Card } from "@/components/ui/card";
import { DollarSign, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CurrencyConverter from "@/components/CurrencyConverter";
import Navigation from "@/components/Navigation";

const ConverterPage = () => {
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
            Currency Converter
          </h1>
          <p className="text-muted-foreground">
            Convert between different currencies with live exchange rates
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 border-border/50 gradient-card shadow-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-purple-400 shadow-glow">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold">Exchange Rates</h2>
            </div>
            <CurrencyConverter />
          </Card>

          {/* Exchange Rate Info */}
          <Card className="mt-6 p-6 border-border/50 gradient-card shadow-glow">
            <h3 className="font-semibold mb-3">Popular Currency Pairs</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 rounded bg-background/30">
                <span className="text-muted-foreground">USD to EUR</span>
                <span className="font-medium">0.92</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-background/30">
                <span className="text-muted-foreground">USD to GBP</span>
                <span className="font-medium">0.79</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-background/30">
                <span className="text-muted-foreground">USD to JPY</span>
                <span className="font-medium">149.50</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-background/30">
                <span className="text-muted-foreground">USD to INR</span>
                <span className="font-medium">83.20</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ConverterPage;
