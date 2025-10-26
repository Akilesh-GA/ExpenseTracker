import { Link } from "react-router-dom";
import { Wallet, TrendingUp, DollarSign, Receipt, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Welcome = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Expense Tracker",
      description: "Track all your expenses with detailed categorization and beautiful insights",
      path: "/dashboard",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: DollarSign,
      title: "Currency Converter",
      description: "Convert between multiple currencies with real-time exchange rates",
      path: "/converter",
      gradient: "from-accent to-purple-400",
    },
    {
      icon: Receipt,
      title: "Bill Management",
      description: "Upload and organize your bills and receipts in one secure place",
      path: "/bills",
      gradient: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background blur-3xl" />
        
        <div className="relative container mx-auto px-4 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-top duration-700 delay-100">
              <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                ExpenseTracker
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-top duration-700 delay-200">
              Take control of your finances with powerful tracking, insights, and tools all in one place
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-top duration-700 delay-300">
              <Link to="/dashboard">
                <Button size="lg" className="gradient-primary shadow-primary hover:opacity-90 transition-smooth text-lg px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-16">
          {features.map((feature, index) => (
            <Link key={feature.path} to={feature.path}>
              <Card 
                className="p-8 border-border/50 gradient-card shadow-glow hover:shadow-primary transition-smooth group cursor-pointer h-full animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-smooth shadow-glow`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-smooth">
                  Explore
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
      </div>
    </div>
  );
};

export default Welcome;
