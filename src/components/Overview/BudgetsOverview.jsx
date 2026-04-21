import { Link } from 'react-router-dom';
import IconChevronRight from '../Icon/IconChevronRight';
import { Pie, PieChart, Cell, Tooltip } from 'recharts';
import { mockBudgets } from '../../api/api';

export default function BudgetsOverview() {
  return (
    <section className="bg-white rounded-xl px-5 py-6 md:p-8 flex flex-col gap-5 ">
      <div className="flex justify-between items-center">
        <h2 className="font2 text-grey-900">Budgets</h2>
        <Link
          to="/budgets"
          className="cursor-pointer font4-regular text-grey-500 flex gap-3 items-center "
        >
          See Details
          <IconChevronRight className="w-3 h-3" />
        </Link>
      </div>{' '}
      <div className=" flex items-center justify-center ">
        <PieChart width={240} height={240}>
          <Pie
            data={mockBudgets}
            dataKey="maximum"
            innerRadius={90}
            outerRadius={120}
            stroke="none"
          >
            {mockBudgets.map((budget) => (
              <Cell key={budget.id} fill={budget.theme} fillOpacity={1} />
            ))}
          </Pie>
          <Pie
            data={mockBudgets}
            dataKey="maximum"
            innerRadius={75}
            outerRadius={90}
            stroke="none"
          >
            {mockBudgets.map((budget) => (
              <Cell key={budget.id} fill={budget.theme} fillOpacity={0.7} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </section>
  );
}
