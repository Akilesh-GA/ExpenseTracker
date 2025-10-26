import { Trash2, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Expense } from "@/pages/Dashboard";

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

const categoryColors: Record<string, string> = {
  Food: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Transport: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Entertainment: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Shopping: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  Healthcare: "bg-red-500/20 text-red-400 border-red-500/30",
  Bills: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Other: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  if (expenses.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>No expenses yet. Add your first expense to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="flex items-center justify-between p-4 rounded-lg bg-background/30 border border-border/30 hover:border-primary/50 transition-smooth group"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-semibold text-lg">{expense.title}</h3>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                  categoryColors[expense.category] || categoryColors.Other
                }`}
              >
                <Tag className="h-3 w-3 inline mr-1" />
                {expense.category}
              </span>
            </div>
            {expense.description && (
              <p className="text-sm text-muted-foreground mb-2">{expense.description}</p>
            )}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-3 w-3" />
              {new Date(expense.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-primary">
              ₹{expense.amount.toFixed(2)}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(expense.id)}
              className="opacity-0 group-hover:opacity-100 transition-smooth hover:bg-destructive/20 hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
