import SummaryCard from '../components/Overview/SummaryCardOverview';
import PotsOverview from '../components/Overview/PotsOverview.tsx';
import TransactionsOverview from '../components/Overview/TransactionsOverview.tsx';
import BillsOverview from '../components/Overview/BillsOverview.tsx';
import BudgetsOverview from '../components/Overview/BudgetsOverview.tsx';
import { useOverview } from '../hooks/useOverview.ts';
import { ClipLoader } from 'react-spinners';

export default function OverviewPage() {
  const { data: overview, isLoading } = useOverview();
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-full w-full">
        <ClipLoader color="#277c78" size={35} />
      </div>
    );
  return (
    <main className="py-8 px-4 mb-10 md:px-10 w-full flex flex-col gap-8">
      <h1 className="font1 text-grey-900">Overview</h1>

      <div className="flex flex-col gap-3 md:flex-row md:gap-6 md:w-full">
        <SummaryCard
          title="Current Balance"
          amount={overview?.balance}
          mode="dark"
        />
        <SummaryCard title="Income" amount={overview?.income} />
        <SummaryCard title="Expenses" amount={overview?.expenses} />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <PotsOverview />
          <TransactionsOverview />
        </div>

        <div className="flex flex-col gap-6 lg:w-107.5 shrink-0">
          <BudgetsOverview />
          <BillsOverview />
        </div>
      </div>
    </main>
  );
}
