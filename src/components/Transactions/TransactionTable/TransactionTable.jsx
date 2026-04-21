import TransactionRow from './TransactionRow';

export default function TransactionTable({ transactions }) {
  return (
    <table className="w-full table-fixed">
      <thead className="border-b border-grey-100">
        <tr className="text-grey-500 font5-regular">
          <th className="w-1/4 text-left pb-3 hidden md:table-cell">
            Recipient/Sender
          </th>
          <th className="w-1/4 text-left pb-3 hidden md:table-cell">
            Category
          </th>
          <th className="w-1/4 text-left pb-3 hidden md:table-cell">
            Transaction Date
          </th>
          <th className="w-1/4 text-right pb-3 hidden md:table-cell">Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.length > 0 ? (
          transactions.map((m) => <TransactionRow key={m.id} values={m} />)
        ) : (
          <tr>
            <td colSpan={4} className="text-center font4-regular py-4">
              No results found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
