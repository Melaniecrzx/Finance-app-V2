import { Link } from 'react-router-dom';
import IconChevronRight from '../Icon/IconChevronRight';
import { mockTransactions } from '../../api/api';

export default function BillsOverview() {
  const recurringBills = mockTransactions.filter((m) => m.recurring);
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
      <div>
        {recurringBills.slice(0, 3).map((r) => (
          <div key={r.id} className="bg-beige-50 rounded-xl w-full"></div>
        ))}
      </div>
    </section>
  );
}
