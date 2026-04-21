import IconRecurringBills from '../../assets/images/icon-recurring-bills.svg';
import { mockTransactions } from '../../api/api';

const dateFictive = '2024-08-01';

const recurringBills = mockTransactions.filter((m) => m.recurring);

export default function BillsSummary() {
  const recurringBillsTotal = (
    recurringBills.reduce((acc, c) => acc + c.amount, 0) / -1
  ).toFixed(2);
  const paidBills = recurringBills.filter(
    (r) => new Date(r.date) > new Date(dateFictive),
  );

  const paidBillsTotal = (
    paidBills.reduce((acc, c) => acc + c.amount, 0) / -1
  ).toFixed(2);

  const upcomingBills = recurringBills.filter(
    (r) => new Date(r.date) < new Date(dateFictive),
  );

  const upcomingBillsTotal = (
    upcomingBills.reduce((acc, c) => acc + c.amount, 0) / -1
  ).toFixed(2);

  const dueSoonBills = recurringBills.filter((r) => {
    const date = new Date(r.date);
    const diff = (date - new Date(dateFictive)) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 5;
  });

  const dueSoonBillsTotal =
    dueSoonBills.reduce((acc, c) => acc + c.amount, 0) / -1;

  return (
    <section className="flex flex-col gap-3 md:flex-row md:gap-6 lg:flex-col">
      <div className="bg-black rounded-xl px-5 py-6 md:px-6 flex md:flex-col items-center md:items-start gap-3.75 md:gap-8 w-85.75 md:w-83 lg:w-84.25">
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
      <div className="bg-white rounded-xl px-5 py-6 md:px-6 flex flex-col gap-5  w-85.75 md:w-83 lg:w-84.25">
        <span className="text-grey-900 font3">Summary</span>
        <div>
          <div className="flex justify-between  pb-3 border-b border-beige-50">
            <span className="font5-regular text-grey-500">Paid Bills</span>
            <span className="font5-bold text-grey-900">
              {paidBills.length} (${paidBillsTotal})
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-beige-50">
            <span className="font5-regular  py-3 text-grey-500">
              Upcoming Bills
            </span>
            <span className="font5-bold text-grey-900">
              {upcomingBills.length} (${upcomingBillsTotal})
            </span>
          </div>
          <div className="flex justify-between pt-3">
            <span className="font5-regular text-red">Due Soon</span>
            <span className="font5-bold text-grey-500">
              {dueSoonBills.length} (${dueSoonBillsTotal})
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
