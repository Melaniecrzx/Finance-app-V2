import type { Transaction } from "../../../types";
import BillsRow from "./BillsRow";

interface BillsTableProps {
  recurringBills: Transaction[];
}

export default function BillsTable({ recurringBills }: BillsTableProps) {
  return (
    <table className="w-full table-fixed">
      <thead className="border-b border-grey-100">
        <tr className="text-grey-500 font5-regular">
          <th className="w-2/4 text-left pb-3 hidden md:table-cell">
            Bill Title
          </th>
          <th className="w-1/4 text-left pb-3 hidden md:table-cell">
            Due Date
          </th>
          <th className="w-1/4 text-right pb-3 hidden md:table-cell">Amount</th>
        </tr>
      </thead>
      <tbody>
        {recurringBills.length > 0 ? (
          recurringBills.map((m) => <BillsRow key={m.id} recurringBill={m} />)
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
