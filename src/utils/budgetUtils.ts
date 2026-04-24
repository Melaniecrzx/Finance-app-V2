import { mockTransactions } from "../api/api";
import type { Budget, BudgetStats } from "../types";

const dateFictive: string = "2024-08-01";

export const calculateBudgetStats = (budget: Budget): BudgetStats => {
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
