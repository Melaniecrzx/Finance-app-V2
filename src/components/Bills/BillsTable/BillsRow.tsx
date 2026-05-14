import type { Transaction } from '../../../types';
import iconBillDue from '../../../assets/images/icon-bill-due.svg';
import iconBillPaid from '../../../assets/images/icon-bill-paid.svg';

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const suffix = day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th';
  return `Monthly-${day}${suffix}`;
};

interface BillsRowProps {
  recurringBill: Transaction;
}

export default function BillsRow({ recurringBill }: BillsRowProps) {
  const isPaid = recurringBill.status === 'paid';
  const isDueSoon = recurringBill.status === 'due-soon';

  return (
    <tr className="border-b border-grey-100">
      <td className="text-grey-900 font4-bold text-left py-3 flex items-center gap-4">
        <img
          src={recurringBill.avatar}
          className="h-10 w-10 rounded-full shrink-0"
          alt="avatar transaction"
        />
        <span>{recurringBill.name}</span>
      </td>
      <td
        className={`${isPaid ? 'text-green' : isDueSoon ? 'text-red' : 'text-grey-500'} font5-regular  text-left hidden md:table-cell`}
      >
        <div className="flex gap-2 items-center">
          {formatDate(recurringBill.date)}
          {isPaid ? (
            <img src={iconBillPaid} alt="paid" className="w-4 h-4" />
          ) : isDueSoon ? (
            <img src={iconBillDue} alt="due soon" className="w-4 h-4" />
          ) : null}
        </div>
      </td>
      <td className={`font4-bold  text-right text-grey-900`}>
        <span>${Math.abs(recurringBill.amount).toFixed(2)}</span>
      </td>
    </tr>
  );
}
