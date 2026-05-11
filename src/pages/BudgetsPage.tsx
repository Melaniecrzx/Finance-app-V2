import BudgetSummary from '../components/Budgets/BudgetSummary.tsx';
import BudgetCard from '../components/Budgets/BudgetCard.tsx';
import Button from '../components/ui/Button.tsx';
import { useState } from 'react';
import AddNewBudgetModal from '../components/Budgets/AddNewBudgetModal.tsx';
import type { BudgetWithStats } from '../types';
import { useBudgets } from '../hooks/useBudgets.ts';
import { calculateBudgetStats } from '../utils/budgetUtils.ts';

export default function BudgetsPage() {
  const [addNewBudgetOpen, setAddNewBudgetOpen] = useState(false);

  const { data: budgets = [], isLoading } = useBudgets();

  const budgetsWithStats: BudgetWithStats[] = budgets.map((b) => ({
    ...b,
    ...calculateBudgetStats(b),
  }));

  if (isLoading) return <div>Loading...</div>;

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
