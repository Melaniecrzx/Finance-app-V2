import { Pie, PieChart, Cell, Tooltip } from 'recharts';

export default function BudgetSummary({ budgets }) {
  const spentBudgetTotal = budgets.reduce((acc, b) => acc + b.spentBudget, 0);
  const maximumBudgetTotal = budgets.reduce((acc, b) => acc + b.maximum, 0);

  return (
    <section className="bg-white rounded-xl flex flex-col gap-8 px-5 py-6 md:p-8 lg:self-start lg:w-100 lg:shrink-0">
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
              <Cell key={budget.id} fill={budget.theme} fillOpacity={1} />
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
              <Cell key={budget.id} fill={budget.theme} fillOpacity={0.7} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <div className="flex flex-col gap-2 items-center absolute">
          <span className="font1 text-grey-900">
            ${spentBudgetTotal.toFixed(2)}
          </span>
          <span className="font5-regular text-grey-500">
            of ${maximumBudgetTotal} limit
          </span>
        </div>
      </div>
      <div>
        <h2 className="font2 text-grey-900">Spending Summary</h2>
        <div>
          {budgets.map((b) => (
            <div className="border-b border-grey-100 items-center flex justify-between last:border-none py-4">
              <div className="flex gap-4 items-center">
                <div
                  className="h-5.25 w-1 rounded-lg"
                  style={{ backgroundColor: b.theme }}
                ></div>
                <span className="font4-regular text-grey-500">
                  {b.category}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font3 text-grey-900">
                  ${b.spentBudget.toFixed(2)}
                </span>
                <span className="font5-regular text-grey-500">
                  of ${b.maximum.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
