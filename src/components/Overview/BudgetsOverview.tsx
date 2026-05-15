import { Link } from 'react-router-dom';
import IconChevronRight from '../Icon/IconChevronRight';
import { Pie, PieChart, Cell, Tooltip } from 'recharts';
import { calculateBudgetStats } from '../../utils/budgetUtils';
import { useBudgets } from '../../hooks/useBudgets';
import EmptyState from '../ui/EmptyState';
import { useTransactions } from '../../hooks/useTransactions';
import type { Transaction } from '../../types';

export default function BudgetsOverview() {
  const { data: budgets = [] } = useBudgets();
  const { data: transactionsData } = useTransactions({
    page: 1,
    sort: 'latest',
    category: 'all',
    search: '',
  });
  const transactions = transactionsData?.data?.transactions ?? [];

  const budgetsWithStats = budgets.map((b) => ({
    ...b,
    ...calculateBudgetStats(b, transactions),
    latestSpending: transactions
      .filter((t: Transaction) => t.category === b.category)
      .slice(0, 3),
  }));

  const spentBudgetTotal = budgetsWithStats.reduce(
    (acc, b) => acc + b.spentBudget,
    0,
  );
  const maximumBudgetTotal = budgetsWithStats.reduce(
    (acc, b) => acc + b.maximum,
    0,
  );

  return (
    <section className="bg-white rounded-xl px-5 py-6 md:p-8 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="font2 text-grey-900">Budgets</h2>
        <Link
          to="/budgets"
          className="cursor-pointer font4-regular text-grey-500 flex gap-3 items-center"
        >
          See Details
          <IconChevronRight className="w-3 h-3" />
        </Link>
      </div>
      {budgets.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-50 lg:gap-4">
          <div className="relative flex items-center justify-center">
            <PieChart width={240} height={240}>
              <Pie
                data={budgets}
                dataKey="maximum"
                innerRadius={90}
                outerRadius={120}
                stroke="none"
              >
                {budgets.map((budget) => (
                  <Cell key={budget._id} fill={budget.theme} fillOpacity={1} />
                ))}
              </Pie>
              <Pie
                data={budgets}
                dataKey="maximum"
                innerRadius={75}
                outerRadius={90}
                stroke="none"
              >
                {budgets.map((budget) => (
                  <Cell
                    key={budget._id}
                    fill={budget.theme}
                    fillOpacity={0.7}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <div className="absolute flex flex-col gap-1 items-center">
              <span className="font1 text-grey-900">
                ${spentBudgetTotal.toFixed(2)}
              </span>
              <span className="font5-regular text-grey-500">
                of ${maximumBudgetTotal} limit
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {budgets.map((b) => (
              <div key={b._id} className="flex gap-4">
                <div
                  className="rounded-lg h-10.75 w-2"
                  style={{ backgroundColor: b.theme }}
                />
                <div className="flex flex-col gap-2">
                  <span className="text-grey-500 font5-regular">
                    {b.category}
                  </span>
                  <span className="text-grey-900 font4-bold">
                    ${b.maximum.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <EmptyState
          emoji="💰"
          title="No budgets created"
          description="Create a budget to keep your spending on track."
        />
      )}
    </section>
  );
}
