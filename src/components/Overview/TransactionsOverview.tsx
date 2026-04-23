import { mockTransactions } from '../../api/api';
import { Link } from 'react-router-dom';
import IconChevronRight from '../Icon/IconChevronRight';

export default function TransactionsOverview() {
  return (
    <section className="bg-white rounded-xl px-5 py-6 md:p-8 flex flex-col gap-5 ">
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
        {mockTransactions.slice(0, 5).map((t) => (
          <div
            key={t.id}
            className="border-b border-grey-100 last:border-none p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={t.avatar}
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
              </span>{' '}
              <span className="font5-regular text-grey-500">
                {new Date(t.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
