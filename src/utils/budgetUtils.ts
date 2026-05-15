import type { Budget, Transaction } from '../types';

export const calculateBudgetStats = (
  budget: Budget,
  transactions: Transaction[],
) => {
  const spent = transactions
    .filter((t: Transaction) => t.category === budget.category && t.amount < 0)
    .reduce((acc: number, t: Transaction) => acc + Math.abs(t.amount), 0);

  const spentBudget = Math.min(spent, budget.maximum);
  const spentBudgetPercentage = (spentBudget / budget.maximum) * 100;
  const remainingBudget = budget.maximum - spentBudget;

  return { spentBudget, spentBudgetPercentage, remainingBudget };
};
