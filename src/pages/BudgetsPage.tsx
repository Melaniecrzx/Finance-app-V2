import BudgetSummary from "../components/Budgets/BudgetSummary.tsx";
import BudgetCard from "../components/Budgets/BudgetCard.tsx";
import Button from "../components/ui/Button.tsx";
import { mockTransactions } from "../api/api";
import { useState } from "react";
import AddNewBudgetModal from "../components/Budgets/AddNewBudgetModal.tsx";
import type { Budget, BudgetStats, BudgetWithStats } from "../types";
import { useAppSelector } from "../app/hooks.ts";

const dateFictive: string = "2024-08-01";

const calculateBudgetStats = (budget: Budget): BudgetStats => {
  const transactionsBudget = mockTransactions.filter(
    (t) => t.category.toLowerCase() === budget.category.toLowerCase(),
  );
  const spentBudget = transactionsBudget
    .filter((t) => new Date(t.date) > new Date(dateFictive))
    .reduce((acc, t) => acc - t.amount, 0);
  const spentBudgetPercentage =
    budget.maximum === 0
      ? 0
      : Math.min((spentBudget / budget.maximum) * 100, 100);

  const remainingBudget =
    budget.maximum - spentBudget > 0 ? budget.maximum - spentBudget : 0;
  const latestSpending = transactionsBudget.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return {
    spentBudget,
    spentBudgetPercentage,
    remainingBudget,
    latestSpending,
  };
};

export default function BudgetsPage() {
  const [addNewBudgetOpen, setAddNewBudgetOpen] = useState(false);

  const budgets = useAppSelector((state) => state.budgets.value);

  const budgetsWithStats: BudgetWithStats[] = budgets.map((b) => ({
    ...b,
    ...calculateBudgetStats(b),
  }));

  return (
    <main className="py-8 px-4 mb-10 md:px-10 flex flex-col gap-8 w-full">
      <div className="flex justify-between items-center">
        <h1 className="font1 text-grey-900">Budgets</h1>
        <Button mode="primary" onClick={() => setAddNewBudgetOpen(true)}>
          + Add New Budget
        </Button>
      </div>
      <div className="flex flex-col gap-8 md:gap-6 lg:flex-row ">
        <BudgetSummary budgets={budgetsWithStats} />
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          {budgets.map((m) => (
            <BudgetCard key={m.id} budget={m} stats={calculateBudgetStats(m)} />
          ))}
        </div>
      </div>

      <AddNewBudgetModal
        addNewBudgetOpen={addNewBudgetOpen}
        setAddNewBudgetOpen={setAddNewBudgetOpen}
      />
    </main>
  );
}
