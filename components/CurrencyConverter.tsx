import { useState, useEffect } from "react";
import { ArrowDownUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const currencies = [
  { code: "USD", name: "US Dollar", rate: 1 },
  { code: "EUR", name: "Euro", rate: 0.92 },
  { code: "GBP", name: "British Pound", rate: 0.79 },
  { code: "JPY", name: "Japanese Yen", rate: 149.5 },
  { code: "CAD", name: "Canadian Dollar", rate: 1.36 },
  { code: "AUD", name: "Australian Dollar", rate: 1.53 },
  { code: "INR", name: "Indian Rupee", rate: 83.2 },
];

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("100");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(0);

  useEffect(() => {
    const fromRate = currencies.find((c) => c.code === fromCurrency)?.rate || 1;
    const toRate = currencies.find((c) => c.code === toCurrency)?.rate || 1;
    const converted = (parseFloat(amount) / fromRate) * toRate;
    setResult(isNaN(converted) ? 0 : converted);
  }, [amount, fromCurrency, toCurrency]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="bg-background/50 border-border/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="from">From</Label>
        <Select value={fromCurrency} onValueChange={setFromCurrency}>
          <SelectTrigger className="bg-background/50 border-border/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((currency) => (
              <SelectItem key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={swapCurrencies}
          className="rounded-full hover:bg-primary/20 hover:text-primary transition-smooth"
        >
          <ArrowDownUp className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-2">
        <Label htmlFor="to">To</Label>
        <Select value={toCurrency} onValueChange={setToCurrency}>
          <SelectTrigger className="bg-background/50 border-border/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((currency) => (
              <SelectItem key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 mt-4">
        <p className="text-sm text-muted-foreground mb-1">Result</p>
        <p className="text-2xl font-bold text-primary">
          {result.toFixed(2)} {toCurrency}
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
