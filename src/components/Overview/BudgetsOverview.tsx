import { Link } from "react-router-dom";
import IconChevronRight from "../Icon/IconChevronRight";
import { Pie, PieChart, Cell, Tooltip } from "recharts";
import { useAppSelector } from "../../app/hooks";

export default function BudgetsOverview() {
  const budgets = useAppSelector((state) => state.budgets.value);

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
      </div>{" "}
      <div className=" flex items-center gap-4">
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
        <div className="flex flex-col gap-4">
          {budgets.map((b) => (
            <div key={b.id} className="flex gap-4">
              <div
                className="rounded-lg h-[43px] w-2 items-center"
                style={{ backgroundColor: b.theme }}
              ></div>
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
    </section>
  );
}
