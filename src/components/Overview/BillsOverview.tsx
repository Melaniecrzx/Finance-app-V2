import { Link } from 'react-router-dom';
import IconChevronRight from '../Icon/IconChevronRight';
import { mockTransactions } from '../../api/api';
import { DATE_FICTIVE } from '../../constants';
import { paidBills, upcomingBills, dueSoonBills } from '../../utils/billsUtils';

export default function BillsOverview() {
  const getMonthlyDate = (dateString: string, referenceDate: string): Date => {
    const day = new Date(dateString).getDate();
    const ref = new Date(referenceDate);
    return new Date(ref.getFullYear(), ref.getMonth(), day);
  };
  const recurringBills = mockTransactions
    .filter((m) => m.recurring)
    .map((b) => ({
      ...b,
      date: getMonthlyDate(b.date, DATE_FICTIVE).toISOString(),
    }));

  const paidBillsTotal = Math.abs(
    paidBills(recurringBills, DATE_FICTIVE).reduce(
      (acc, c) => acc + c.amount,
      0,
    ),
  );

  const upcomingBillsTotal = Math.abs(
    upcomingBills(recurringBills, DATE_FICTIVE).reduce(
      (acc, c) => acc + c.amount,
      0,
    ),
  );

  const dueSoonBillsTotal = Math.abs(
    dueSoonBills(recurringBills, DATE_FICTIVE).reduce(
      (acc, c) => acc + c.amount,
      0,
    ),
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
            <span className="font4-regular text-grey-500">Upcoming Bills</span>
            <span className="font4-bold text-grey-900">
              ${upcomingBillsTotal.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex rounded-lg overflow-hidden">
          <div className="w-1 bg-cyan shrink-0" />
          <div className="flex justify-between items-center bg-beige-50 py-5 px-4 flex-1">
            <span className="font4-regular text-grey-500">Due Soon Bills</span>
            <span className="font4-bold text-grey-900">
              ${dueSoonBillsTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
