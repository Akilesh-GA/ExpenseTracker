import { TrendingUp, TrendingDown, DollarSign, ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Expense } from "@/pages/Dashboard";

interface StatsOverviewProps {
  expenses: Expense[];
  totalExpenses: number;
}

const StatsOverview = ({ expenses, totalExpenses }: StatsOverviewProps) => {
  const thisMonthExpenses = expenses.filter((exp) => {
    const expDate = new Date(exp.date);
    const now = new Date();
    return expDate.getMonth() === now.getMonth() && expDate.getFullYear() === now.getFullYear();
  });

  const thisMonthTotal = thisMonthExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  const avgExpense = expenses.length > 0 ? totalExpenses / expenses.length : 0;

  const categoryCounts = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="p-6 border-border/50 gradient-card shadow-glow hover:shadow-primary transition-smooth">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Expenses</p>
            <h3 className="text-3xl font-bold text-foreground">₹{totalExpenses.toFixed(2)}</h3>
          </div>
          <div className="p-3 rounded-lg bg-primary/10">
            <DollarSign className="h-6 w-6 text-primary" />
          </div>
        </div>
      </Card>

      <Card className="p-6 border-border/50 gradient-card shadow-glow hover:shadow-primary transition-smooth">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">This Month</p>
            <h3 className="text-3xl font-bold text-foreground">₹{thisMonthTotal.toFixed(2)}</h3>
          </div>
          <div className="p-3 rounded-lg bg-accent/10">
            <TrendingUp className="h-6 w-6 text-accent" />
          </div>
        </div>
      </Card>

      <Card className="p-6 border-border/50 gradient-card shadow-glow hover:shadow-primary transition-smooth">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Average Expense</p>
            <h3 className="text-3xl font-bold text-foreground">₹{avgExpense.toFixed(2)}</h3>
          </div>
          <div className="p-3 rounded-lg bg-emerald-500/10">
            <TrendingDown className="h-6 w-6 text-emerald-400" />
          </div>
        </div>
      </Card>

      <Card className="p-6 border-border/50 gradient-card shadow-glow hover:shadow-primary transition-smooth">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Top Category</p>
            <h3 className="text-3xl font-bold text-foreground">{topCategory}</h3>
          </div>
          <div className="p-3 rounded-lg bg-purple-500/10">
            <ShoppingBag className="h-6 w-6 text-purple-400" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StatsOverview;
