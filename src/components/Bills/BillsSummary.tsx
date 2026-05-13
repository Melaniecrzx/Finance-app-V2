import IconRecurringBills from '../../assets/images/icon-recurring-bills.svg';
import type { Transaction } from '../../types';
import { DATE_FICTIVE } from '../../constants';
import { paidBills, upcomingBills, dueSoonBills } from '../../utils/billsUtils';

interface BillsSummaryProps {
  recurringBills: Transaction[];
}

export default function BillsSummary({ recurringBills }: BillsSummaryProps) {
  const recurringBillsTotal = (
    recurringBills.reduce((acc, c) => acc + c.amount, 0) / -1
  ).toFixed(2);

  const paidBillsArr = paidBills(recurringBills, DATE_FICTIVE);
  const upcomingBillsArr = upcomingBills(recurringBills, DATE_FICTIVE);
  const dueSoonBillsArr = dueSoonBills(recurringBills, DATE_FICTIVE);

  const paidBillsTotal = Math.abs(
    paidBills(recurringBills, DATE_FICTIVE).reduce(
      (acc, c) => acc + c.amount,
      0,
    ),
  ).toFixed(2);

  const upcomingBillsTotal = Math.abs(
    upcomingBillsArr.reduce((acc, c) => acc + c.amount, 0),
  ).toFixed(2);

  const dueSoonBillsTotal = Math.abs(
    dueSoonBillsArr.reduce((acc, c) => acc + c.amount, 0),
  );

  return (
    <section className="flex flex-col gap-3 md:flex-row md:gap-6 lg:flex-col">
      <div className="bg-black rounded-xl px-5 py-6 md:px-6 flex md:flex-col items-center md:items-start gap-3.75 md:gap-8 w-full  lg:w-84.25">
        <img
          src={IconRecurringBills}
          alt="Recurring Bills Icon"
          className="w-10 h-10"
        />
        <div className="flex flex-col gap-3">
          <span className="text-white font4-regular">Total Bills</span>
          <span className="text-white font1">${recurringBillsTotal}</span>
        </div>
      </div>
      <div className="bg-white rounded-xl px-5 py-6 md:px-6 flex flex-col gap-5  w-full  lg:w-84.25">
        <span className="text-grey-900 font3">Summary</span>
        <div>
          <div className="flex justify-between  pb-3 border-b border-beige-50">
            <span className="font5-regular text-grey-500">Paid Bills</span>
            <span className="font5-bold text-grey-900">
              {paidBillsArr.length} (${paidBillsTotal})
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-beige-50">
            <span className="font5-regular  py-3 text-grey-500">
              Upcoming Bills
            </span>
            <span className="font5-bold text-grey-900">
              {upcomingBillsArr.length} (${upcomingBillsTotal})
            </span>
          </div>
          <div className="flex justify-between pt-3">
            <span className="font5-regular text-red">Due Soon</span>
            <span className="font5-bold text-red">
              {dueSoonBillsArr.length} (${dueSoonBillsTotal.toFixed(2)})
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
