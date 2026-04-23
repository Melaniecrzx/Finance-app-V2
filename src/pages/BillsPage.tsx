import BillsSummary from "../components/Bills/BillsSummary";
import BillsTable from "../components/Bills/BillsTable/BillsTable";
import { mockTransactions } from "../api/api";
import { useState } from "react";
import type { SortOption } from "../types/index";
import BillsHeader from "../components/Bills/BillsHeader";

export default function BillsPage() {
  const recurringBills = mockTransactions.filter((m) => m.recurring);
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState<SortOption>("latest");

  const sortBills = [...recurringBills]
    .filter((m) => m.name.toLowerCase().includes(searchInput.toLowerCase()))
    .sort((a, b) => {
      if (sort === "latest")
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sort === "oldest")
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sort === "a-z") return a.name.localeCompare(b.name);
      if (sort === "z-a") return b.name.localeCompare(a.name);
      if (sort === "highest") return b.amount - a.amount;
      if (sort === "lowest") return a.amount - b.amount;
      return 0;
    });
  return (
    <main className="py-8 px-4 md:px-10 flex flex-col gap-8">
      <h1 className="font1 text-grey-900">Recurring Bills</h1>
      <div className="flex gap-6">
        <BillsSummary recurringBills={sortBills} />
        <section className="bg-white rounded-xl py-6 px-5 md:p-8 flex flex-col gap-6">
          <BillsHeader
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            onSort={setSort}
            sort={sort}
          />
          <BillsTable recurringBills={sortBills} />
        </section>
      </div>
    </main>
  );
}
