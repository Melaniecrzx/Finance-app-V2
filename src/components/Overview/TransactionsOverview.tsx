import { Link } from 'react-router-dom';
import IconChevronRight from '../Icon/IconChevronRight';
import { useOverview } from '../../hooks/useOverview';
import type { Transaction } from '../../types';
import EmptyState from '../ui/EmptyState';

export default function TransactionsOverview() {
  const { data: overview } = useOverview();

  return (
    <section className="bg-white rounded-xl px-5 pt-6 flex flex-col gap-5 ">
      <div className="flex justify-between items-center">
        <h2 className="font2 text-grey-900">Transactions</h2>
        <Link
          to="/transactions"
          className="cursor-pointer font4-regular text-grey-500 flex gap-3 items-center "
        >
          View All
          <IconChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div>
        {overview?.recentTransactions?.length > 0 ? (
          overview.recentTransactions.map((t: Transaction) => (
            <div
              key={t._id}
              className="border-b border-grey-100 last:border-none p-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar.replace('./assets/images/avatars', '/avatars')}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font4-bold text-grey-900">{t.name}</span>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <span
                  className={`font4-bold ${t.amount > 0 ? 'text-green' : 'text-grey-900'}`}
                >
                  {t.amount > 0 ? '+' : ''}${Math.abs(t.amount).toFixed(2)}
                </span>
                <span className="font5-regular text-grey-500">
                  {new Date(t.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center text-center items-center flex-1">
            <EmptyState
              emoji="💸"
              title="No recent transactions"
              description="Your recent transactions will appear here."
            />
          </div>
        )}
      </div>
    </section>
  );
}
