import SummaryCard from "../components/Overview/SummaryCardOverview";
import PotsOverview from "../components/Overview/PotsOverview.tsx";
import TransactionsOverview from "../components/Overview/TransactionsOverview.tsx";
import BillsOverview from "../components/Overview/BillsOverview.tsx";
import BudgetsOverview from "../components/Overview/BudgetsOverview.tsx";
import { mockBalance } from "../api/api";

export default function OverviewPage() {
  return (
    <main className="py-8 px-4 mb-10 md:px-10 w-full flex flex-col gap-8">
      <h1 className="font1 text-grey-900">Overview</h1>

      <div className="flex flex-col gap-3 md:flex-row md:gap-6 md:w-full">
        <SummaryCard
          title="Current Balance"
          amount={mockBalance.current}
          mode="dark"
        />
        <SummaryCard title="Income" amount={mockBalance.income} />
        <SummaryCard title="Expenses" amount={mockBalance.expenses} />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <PotsOverview />
          <TransactionsOverview />
        </div>

        <div className="flex flex-col gap-6 lg:w-107.5 shrink-0">
          <BudgetsOverview />
          <BillsOverview className="flex-1 h-full" />
        </div>
      </div>
    </main>
  );
}
