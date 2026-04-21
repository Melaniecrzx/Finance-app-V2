import BillsSummary from '../components/Bills/BillsSummary';

export default function Bills() {
  return (
    <main className="py-8 px-4 md:px-10 flex flex-col gap-8">
      <h1 className="font1 text-grey-900">Recurring Bills</h1>
      <BillsSummary />
    </main>
  );
}
