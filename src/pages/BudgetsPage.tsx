import BudgetSummary from '../components/Budgets/BudgetSummary.tsx';
import BudgetCard from '../components/Budgets/BudgetCard.tsx';
import Button from '../components/ui/Button.tsx';
import { useState } from 'react';
import AddNewBudgetModal from '../components/Budgets/AddNewBudgetModal.tsx';
import type { BudgetWithStats } from '../types';
import { useBudgets } from '../hooks/useBudgets.ts';
import { calculateBudgetStats } from '../utils/budgetUtils.ts';
import { ClipLoader } from 'react-spinners';
import EmptyState from '../components/ui/EmptyState.tsx';
import { useTransactions } from '../hooks/useTransactions';

export default function BudgetsPage() {
  const [addNewBudgetOpen, setAddNewBudgetOpen] = useState(false);

  const { data: budgets = [], isLoading } = useBudgets();
  const { data: transactionsData } = useTransactions({
    page: 1,
    sort: 'latest',
    category: 'all',
    search: '',
  });
  const transactions = transactionsData?.data?.transactions ?? [];

  const budgetsWithStats: BudgetWithStats[] = budgets.map((b) => ({
    ...b,
    ...calculateBudgetStats(b, transactions),
    latestSpending: transactions
      .filter((t) => t.category === b.category)
      .slice(0, 3),
  }));

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-full w-full">
        <ClipLoader color="#277c78" size={35} />
      </div>
    );

  return (
    <main className="py-8 px-4 mb-10 md:px-10 flex flex-col gap-8 w-full">
      <div className="flex justify-between items-center">
        <h1 className="font1 text-grey-900">Budgets</h1>
        <Button mode="primary" onClick={() => setAddNewBudgetOpen(true)}>
          + Add New Budget
        </Button>
      </div>
      {budgets.length > 0 ? (
        <div className="flex flex-col gap-8 md:gap-6 lg:flex-row ">
          <BudgetSummary budgets={budgetsWithStats} />
          <div className="flex flex-col gap-6 flex-1 min-w-0">
            {budgets.map((m) => (
              <BudgetCard
                key={m._id}
                budget={m}
                stats={calculateBudgetStats(m, transactions)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center h-screen items-center flex-1">
          <EmptyState
            emoji="💰"
            title="No budgets created"
            description="It looks like you don't have any budgets setup. Create a budget to keep your spending on track."
            buttonLabel="+ Add New Budget"
            onClick={() => setAddNewBudgetOpen(true)}
          />
        </div>
      )}

      <AddNewBudgetModal
        addNewBudgetOpen={addNewBudgetOpen}
        setAddNewBudgetOpen={setAddNewBudgetOpen}
      />
    </main>
  );
}
