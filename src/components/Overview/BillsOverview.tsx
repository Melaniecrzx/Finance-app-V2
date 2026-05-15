import { Link } from 'react-router-dom';
import IconChevronRight from '../Icon/IconChevronRight';
import EmptyState from '../ui/EmptyState';
import { useBills } from '../../hooks/useBills';

export default function BillsOverview() {
  const { data: bills = [] } = useBills();

  const paidBillsArr = bills.filter((r) => r.status === 'paid');
  const dueSoonBillsArr = bills.filter((r) => r.status === 'due-soon');
  const upcomingBillsArr = bills.filter((r) => r.status === 'upcoming');

  const paidBillsTotal = Math.abs(
    paidBillsArr.reduce((acc, p) => acc + p.amount, 0),
  );

  const dueSoonBillsTotal = Math.abs(
    dueSoonBillsArr.reduce((acc, p) => acc + p.amount, 0),
  );

  const upcomingBillsTotal = Math.abs(
    upcomingBillsArr.reduce((acc, p) => acc + p.amount, 0),
  );

  return (
    <section className="bg-white rounded-xl px-5 py-6 md:p-8 flex flex-col gap-5 ">
      <div className="flex justify-between items-center">
        <h2 className="font2 text-grey-900">Recurring Bills</h2>
        <Link
          to="/bills"
          className="cursor-pointer font4-regular text-grey-500 flex gap-3 items-center "
        >
          See Details
          <IconChevronRight className="w-3 h-3" />
        </Link>
      </div>
      {bills.length > 0 ? (
        <div className="flex flex-col gap-3">
          <div className="flex rounded-lg overflow-hidden">
            <div className="w-1 bg-green shrink-0" />
            <div className="flex justify-between items-center bg-beige-50 py-5 px-4 flex-1">
              <span className="font4-regular text-grey-500">Paid Bills</span>
              <span className="font4-bold text-grey-900">
                ${paidBillsTotal.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex rounded-lg overflow-hidden">
            <div className="w-1 bg-yellow shrink-0" />
            <div className="flex justify-between items-center bg-beige-50 py-5 px-4 flex-1">
              <span className="font4-regular text-grey-500">
                Upcoming Bills
              </span>
              <span className="font4-bold text-grey-900">
                ${upcomingBillsTotal.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex rounded-lg overflow-hidden">
            <div className="w-1 bg-cyan shrink-0" />
            <div className="flex justify-between items-center bg-beige-50 py-5 px-4 flex-1">
              <span className="font4-regular text-grey-500">
                Due Soon Bills
              </span>
              <span className="font4-bold text-grey-900">
                ${dueSoonBillsTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center h-screen items-center flex-1">
          <EmptyState
            emoji="📅"
            title="No recurring bills"
            description="Your recurring bills will appear here."
          />
        </div>
      )}
    </section>
  );
}
