import { useState } from "react";
import { TrendingUp, Receipt, DollarSign, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ExpenseForm from "@/components/ExpenseForm";
import ExpenseList from "@/components/ExpenseList";
import CurrencyConverter from "@/components/CurrencyConverter";
import BillUpload from "@/components/BillUpload";
import StatsOverview from "@/components/StatsOverview";
import Navigation from "@/components/Navigation";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  description?: string;
}

const Dashboard = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: "1",
      title: "Grocery Shopping",
      amount: 1000,
      category: "Food",
      date: "2025-10-07",
      description: "Weekly groceries"
    },
    {
      id: "2",
      title: "Netflix",
      amount: 399,
      category: "Entertainment",
      date: "2025-10-05",
    }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddExpense = (expense: Omit<Expense, "id">) => {
    const newExpense = {
      ...expense,
      id: Date.now().toString(),
    };
    setExpenses([newExpense, ...expenses]);
    setShowAddForm(false);
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground">Track your expenses and manage your finances</p>
          </div>
          <Button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="gradient-primary shadow-primary hover:opacity-90 transition-smooth"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Expense
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="mb-8">
          <StatsOverview expenses={expenses} totalExpenses={totalExpenses} />
        </div>

        {/* Add Expense Form */}
        {showAddForm && (
          <Card className="p-6 mb-8 border-border/50 gradient-card shadow-glow animate-in slide-in-from-top duration-300">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Plus className="h-5 w-5 text-primary" />
              Add New Expense
            </h2>
            <ExpenseForm onSubmit={handleAddExpense} onCancel={() => setShowAddForm(false)} />
          </Card>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Expenses - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="p-6 border-border/50 gradient-card shadow-glow h-full">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Recent Expenses
              </h2>
              <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
            </Card>
          </div>

          {/* Currency Converter - Quick Access */}
          <div>
            <Card className="p-6 border-border/50 gradient-card shadow-glow mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Quick Convert
                </h2>
                <Link to="/converter">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                    View Full
                  </Button>
                </Link>
              </div>
              <CurrencyConverter />
            </Card>

            {/* Bill Upload - Quick Access */}
            <Card className="p-6 border-border/50 gradient-card shadow-glow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Receipt className="h-5 w-5 text-primary" />
                  Recent Bills
                </h2>
                <Link to="/bills">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                    View All
                  </Button>
                </Link>
              </div>
              <BillUpload />
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
